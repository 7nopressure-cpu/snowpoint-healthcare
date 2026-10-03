"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Creates a high-res radial glowing sprite texture in memory.
 * Zero external asset dependencies.
 */
function createGlowingParticleTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 62);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.2, "rgba(240, 249, 255, 0.95)");
    gradient.addColorStop(0.45, "rgba(56, 189, 248, 0.85)");
    gradient.addColorStop(0.7, "rgba(2, 132, 199, 0.35)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface ParticleSceneProps {
  mouse: React.MutableRefObject<{ x: number; y: number; targetX: number; targetY: number }>;
}

function ParticleScene({ mouse }: ParticleSceneProps) {
  const spherePointsRef = useRef<THREE.Points>(null!);
  const fluidFieldRef = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  // Client-safe texture creation
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  useEffect(() => {
    setTexture(createGlowingParticleTexture());
  }, []);

  // ----------------------------------------------------
  // 1. Core Sphere Particles (Fibonacci spiral distribution)
  // ----------------------------------------------------
  const sphereCount = 3200;
  const [spherePositions, sphereOriginal, sphereColors] = useMemo(() => {
    const positions = new Float32Array(sphereCount * 3);
    const original = new Float32Array(sphereCount * 3);
    const colors = new Float32Array(sphereCount * 3);

    const radius = 2.6;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    const colWhite = new THREE.Color("#FFFFFF");
    const colCyan = new THREE.Color("#38BDF8");
    const colIce = new THREE.Color("#BAE6FD");
    const colRoyal = new THREE.Color("#0284C7");

    for (let i = 0; i < sphereCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / sphereCount);

      // Organic radial variation
      const r = radius + (Math.random() - 0.5) * 0.35;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const i3 = i * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      original[i3] = x;
      original[i3 + 1] = y;
      original[i3 + 2] = z;

      // Color distribution: 40% crisp white, 35% cyan, 15% ice, 10% royal blue
      const rand = Math.random();
      let chosenColor: THREE.Color;
      if (rand < 0.40) chosenColor = colWhite;
      else if (rand < 0.75) chosenColor = colCyan;
      else if (rand < 0.90) chosenColor = colIce;
      else chosenColor = colRoyal;

      colors[i3] = chosenColor.r;
      colors[i3 + 1] = chosenColor.g;
      colors[i3 + 2] = chosenColor.b;
    }

    return [positions, original, colors];
  }, [sphereCount]);

  // ----------------------------------------------------
  // 2. Surrounding Fluid Particle Field
  // ----------------------------------------------------
  const fieldCount = 2200;
  const [fieldPositions, fieldOriginal, fieldColors] = useMemo(() => {
    const positions = new Float32Array(fieldCount * 3);
    const original = new Float32Array(fieldCount * 3);
    const colors = new Float32Array(fieldCount * 3);

    const colWhite = new THREE.Color("#FFFFFF");
    const colCyan = new THREE.Color("#38BDF8");
    const colNavy = new THREE.Color("#0369A1");

    for (let i = 0; i < fieldCount; i++) {
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 9;
      const z = (Math.random() - 0.5) * 8 - 1;

      const i3 = i * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      original[i3] = x;
      original[i3 + 1] = y;
      original[i3 + 2] = z;

      const rand = Math.random();
      let col: THREE.Color;
      if (rand < 0.35) col = colWhite;
      else if (rand < 0.75) col = colCyan;
      else col = colNavy;

      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    return [positions, original, colors];
  }, [fieldCount]);

  // ----------------------------------------------------
  // 3. Interactive Physics Loop
  // ----------------------------------------------------
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Lerp mouse target coordinates
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, mouse.current.targetX, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, mouse.current.targetY, 0.05);

    if (groupRef.current) {
      // Rotation: continuous spin + cursor tilting
      groupRef.current.rotation.y += delta * 0.16;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.3,
        0.04
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -mouse.current.x * 0.18,
        0.04
      );

      // Desktop offset: align sphere with the right column (Cockpit / Telemetry)
      const isWide = state.size.width >= 1024;
      const targetBaseX = isWide ? 2.4 : 0;
      const targetBaseY = isWide ? 0 : 0.4;

      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetBaseX + mouse.current.x * 0.5,
        0.04
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetBaseY + mouse.current.y * 0.35,
        0.04
      );
    }

    // A. Undulating breathing pulse on sphere particles
    if (spherePointsRef.current) {
      const geo = spherePointsRef.current.geometry;
      const posAttr = geo.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      const mouseFactor = Math.hypot(mouse.current.x, mouse.current.y) * 0.06;

      for (let i = 0; i < sphereCount; i++) {
        const i3 = i * 3;
        const ox = sphereOriginal[i3];
        const oy = sphereOriginal[i3 + 1];
        const oz = sphereOriginal[i3 + 2];

        // Biomorphic harmonic wave
        const wave =
          Math.sin(time * 1.9 + ox * 1.3 + oy * 1.3) *
          Math.cos(time * 1.5 + oz * 1.3);

        const pulse = 1 + wave * 0.08 + Math.sin(time * 0.9) * 0.04 + mouseFactor;

        array[i3] = ox * pulse;
        array[i3 + 1] = oy * pulse;
        array[i3 + 2] = oz * pulse;
      }
      posAttr.needsUpdate = true;
    }

    // B. Fluid wave motion on the surrounding particle field
    if (fluidFieldRef.current) {
      const geo = fluidFieldRef.current.geometry;
      const posAttr = geo.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      for (let i = 0; i < fieldCount; i++) {
        const i3 = i * 3;
        const ox = fieldOriginal[i3];
        const oy = fieldOriginal[i3 + 1];
        const oz = fieldOriginal[i3 + 2];

        const waveY =
          Math.sin(ox * 0.35 + time * 0.8) * 0.4 +
          Math.cos(oz * 0.35 + time * 0.6) * 0.3;
        const waveX = Math.cos(oy * 0.3 + time * 0.5) * 0.2;

        array[i3] = ox + waveX + mouse.current.x * 0.4;
        array[i3 + 1] = oy + waveY + mouse.current.y * 0.3;
        array[i3 + 2] = oz;
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Core Sphere Points */}
      <points ref={spherePointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={sphereCount}
            array={spherePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={sphereCount}
            array={sphereColors}
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

      {/* 2. Surrounding Fluid Particle Field */}
      <points ref={fluidFieldRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={fieldCount}
            array={fieldPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={fieldCount}
            array={fieldColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.11}
          vertexColors
          transparent
          opacity={0.75}
          map={texture ?? undefined}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

/**
 * Top-level Canvas container with window pointer event listener
 */
export default function HeroBackground3D() {
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.targetX = x;
      mouse.current.targetY = y;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth) * 2 - 1;
        const y = -(touch.clientY / window.innerHeight) * 2 + 1;
        mouse.current.targetX = x;
        mouse.current.targetY = y;
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-[4]"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 46, near: 0.1, far: 100 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ pointerEvents: "none", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <ParticleScene mouse={mouse} />
      </Canvas>
    </div>
  );
}
