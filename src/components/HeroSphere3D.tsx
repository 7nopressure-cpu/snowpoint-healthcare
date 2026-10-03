"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Procedural in-memory radial glow sprite texture (128x128).
 * Generates radiant circular particles without external downloads.
 */
function createGlowSprite(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 62);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.18, "rgba(240, 249, 255, 0.98)");
    gradient.addColorStop(0.42, "rgba(56, 189, 248, 0.88)");
    gradient.addColorStop(0.72, "rgba(2, 132, 199, 0.35)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface ParticleSphereProps {
  mouse: React.MutableRefObject<{ x: number; y: number; targetX: number; targetY: number }>;
}

function ParticleSphereScene({ mouse }: ParticleSphereProps) {
  const sphereRef = useRef<THREE.Points>(null!);
  const auraRef = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  useEffect(() => {
    setTexture(createGlowSprite());
  }, []);

  // 1. Fibonacci Sphere Particles (3,200 points)
  const sphereCount = 3200;
  const [spherePos, sphereOrig, sphereCols] = useMemo(() => {
    const pos = new Float32Array(sphereCount * 3);
    const orig = new Float32Array(sphereCount * 3);
    const cols = new Float32Array(sphereCount * 3);

    const radius = 2.15;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    const cWhite = new THREE.Color("#FFFFFF");
    const cCyan = new THREE.Color("#38BDF8");
    const cIce = new THREE.Color("#E0F2FE");
    const cSapphire = new THREE.Color("#0284C7");

    for (let i = 0; i < sphereCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / sphereCount);

      // Organic variation
      const r = radius + (Math.random() - 0.5) * 0.28;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const i3 = i * 3;
      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      orig[i3] = x;
      orig[i3 + 1] = y;
      orig[i3 + 2] = z;

      // Color mix
      const rand = Math.random();
      let chosen: THREE.Color;
      if (rand < 0.42) chosen = cWhite;
      else if (rand < 0.76) chosen = cCyan;
      else if (rand < 0.90) chosen = cIce;
      else chosen = cSapphire;

      cols[i3] = chosen.r;
      cols[i3 + 1] = chosen.g;
      cols[i3 + 2] = chosen.b;
    }

    return [pos, orig, cols];
  }, [sphereCount]);

  // 2. Surrounding Floating Particle Aura (1,400 points)
  const auraCount = 1400;
  const [auraPos, auraOrig, auraCols] = useMemo(() => {
    const pos = new Float32Array(auraCount * 3);
    const orig = new Float32Array(auraCount * 3);
    const cols = new Float32Array(auraCount * 3);

    const cWhite = new THREE.Color("#FFFFFF");
    const cCyan = new THREE.Color("#38BDF8");
    const cDark = new THREE.Color("#0369A1");

    for (let i = 0; i < auraCount; i++) {
      // Fluid cloud surrounding the sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.4 + Math.random() * 2.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const i3 = i * 3;
      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      orig[i3] = x;
      orig[i3 + 1] = y;
      orig[i3 + 2] = z;

      const rand = Math.random();
      let chosen = rand < 0.35 ? cWhite : rand < 0.8 ? cCyan : cDark;
      cols[i3] = chosen.r;
      cols[i3 + 1] = chosen.g;
      cols[i3 + 2] = chosen.b;
    }

    return [pos, orig, cols];
  }, [auraCount]);

  // 3. Animation loop
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Lerp mouse inputs smoothly
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, mouse.current.targetX, 0.06);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, mouse.current.targetY, 0.06);

    if (groupRef.current) {
      // Auto spin + cursor tilt
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.45,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -mouse.current.x * 0.25,
        0.05
      );

      // Micro translation towards mouse
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        mouse.current.x * 0.35,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        mouse.current.y * 0.35,
        0.05
      );
    }

    // Sphere wave pulse
    if (sphereRef.current) {
      const geo = sphereRef.current.geometry;
      const attr = geo.attributes.position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;

      const mouseInfluence = Math.hypot(mouse.current.x, mouse.current.y) * 0.08;

      for (let i = 0; i < sphereCount; i++) {
        const i3 = i * 3;
        const ox = sphereOrig[i3];
        const oy = sphereOrig[i3 + 1];
        const oz = sphereOrig[i3 + 2];

        const wave =
          Math.sin(time * 2.2 + ox * 1.5 + oy * 1.5) *
          Math.cos(time * 1.8 + oz * 1.5);

        const pulse = 1 + wave * 0.07 + Math.sin(time) * 0.03 + mouseInfluence;

        arr[i3] = ox * pulse;
        arr[i3 + 1] = oy * pulse;
        arr[i3 + 2] = oz * pulse;
      }
      attr.needsUpdate = true;
    }

    // Aura fluid motion
    if (auraRef.current) {
      const geo = auraRef.current.geometry;
      const attr = geo.attributes.position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;

      for (let i = 0; i < auraCount; i++) {
        const i3 = i * 3;
        const ox = auraOrig[i3];
        const oy = auraOrig[i3 + 1];
        const oz = auraOrig[i3 + 2];

        const waveY = Math.sin(ox * 0.5 + time * 0.8) * 0.25;
        const waveX = Math.cos(oy * 0.5 + time * 0.7) * 0.2;

        arr[i3] = ox + waveX + mouse.current.x * 0.2;
        arr[i3 + 1] = oy + waveY + mouse.current.y * 0.2;
        arr[i3 + 2] = oz;
      }
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core Sphere */}
      <points ref={sphereRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={sphereCount}
            array={spherePos}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={sphereCount}
            array={sphereCols}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.17}
          vertexColors
          transparent
          opacity={0.96}
          map={texture ?? undefined}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* Outer Floating Aura */}
      <points ref={auraRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={auraCount}
            array={auraPos}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={auraCount}
            array={auraCols}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.11}
          vertexColors
          transparent
          opacity={0.72}
          map={texture ?? undefined}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function HeroSphere3D() {
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.targetX = x;
      mouse.current.targetY = y;
    };

    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        const x = (t.clientX / window.innerWidth) * 2 - 1;
        const y = -(t.clientY / window.innerHeight) * 2 + 1;
        mouse.current.targetX = x;
        mouse.current.targetY = y;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 46, near: 0.1, far: 100 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <ParticleSphereScene mouse={mouse} />
      </Canvas>
    </div>
  );
}
