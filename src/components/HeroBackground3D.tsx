"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Creates a circular glowing radial texture in-memory.
 * Zero external asset dependencies.
 */
function createGlowTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.25, "rgba(224, 242, 254, 0.9)");
    gradient.addColorStop(0.55, "rgba(56, 189, 248, 0.4)");
    gradient.addColorStop(0.85, "rgba(2, 132, 199, 0.15)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface ParticleSceneProps {
  mouse: React.MutableRefObject<{ x: number; y: number; targetX: number; targetY: number }>;
}

/**
 * Core 3D Particle Sphere + Fluid Surrounding Field
 */
function ParticleScene({ mouse }: ParticleSceneProps) {
  const spherePointsRef = useRef<THREE.Points>(null!);
  const fluidFieldRef = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  // In-memory glow sprite texture
  const glowTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    return createGlowTexture();
  }, []);

  // ----------------------------------------------------
  // 1. Core Sphere Particles (Fibonacci distribution)
  // ----------------------------------------------------
  const sphereCount = 2600;
  const [spherePositions, sphereOriginal, sphereColors, sphereSizes] = useMemo(() => {
    const positions = new Float32Array(sphereCount * 3);
    const original = new Float32Array(sphereCount * 3);
    const colors = new Float32Array(sphereCount * 3);
    const sizes = new Float32Array(sphereCount);

    const radius = 2.7;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    const colorWhite = new THREE.Color("#FFFFFF");
    const colorCyan = new THREE.Color("#38BDF8");
    const colorSapphire = new THREE.Color("#0284C7");
    const colorDeepNavy = new THREE.Color("#003882");

    for (let i = 0; i < sphereCount; i++) {
      // Golden Spiral distribution on sphere
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / sphereCount);

      // Add gentle random radial variation for volumetric organic feel
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

      // Color distribution: 40% crisp white, 35% cyan, 25% sapphire
      const rand = Math.random();
      let chosenColor: THREE.Color;
      if (rand < 0.38) {
        chosenColor = colorWhite;
        sizes[i] = 0.08 + Math.random() * 0.06;
      } else if (rand < 0.72) {
        chosenColor = colorCyan;
        sizes[i] = 0.06 + Math.random() * 0.05;
      } else if (rand < 0.9) {
        chosenColor = colorSapphire;
        sizes[i] = 0.05 + Math.random() * 0.04;
      } else {
        chosenColor = colorDeepNavy;
        sizes[i] = 0.04 + Math.random() * 0.03;
      }

      colors[i3] = chosenColor.r;
      colors[i3 + 1] = chosenColor.g;
      colors[i3 + 2] = chosenColor.b;
    }

    return [positions, original, colors, sizes];
  }, [sphereCount]);

  // ----------------------------------------------------
  // 2. Fluid Surrounding Wave Field Particles
  // ----------------------------------------------------
  const fieldCount = 1800;
  const [fieldPositions, fieldOriginal, fieldColors] = useMemo(() => {
    const positions = new Float32Array(fieldCount * 3);
    const original = new Float32Array(fieldCount * 3);
    const colors = new Float32Array(fieldCount * 3);

    const colorWhite = new THREE.Color("#FFFFFF");
    const colorCyan = new THREE.Color("#7DD3FC");
    const colorNavy = new THREE.Color("#0369A1");

    for (let i = 0; i < fieldCount; i++) {
      // Spread across a broad volumetric space around the hero
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 7 - 1;

      const i3 = i * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      original[i3] = x;
      original[i3 + 1] = y;
      original[i3 + 2] = z;

      const rand = Math.random();
      let col: THREE.Color;
      if (rand < 0.25) col = colorWhite;
      else if (rand < 0.75) col = colorCyan;
      else col = colorNavy;

      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    return [positions, original, colors];
  }, [fieldCount]);

  // ----------------------------------------------------
  // 3. Animation & Interactive Loop (useFrame)
  // ----------------------------------------------------
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Smoothly lerp mouse target values for buttery smooth parallax
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, mouse.current.targetX, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, mouse.current.targetY, 0.05);

    // Group tilt & parallax position tracking cursor
    if (groupRef.current) {
      // Rotation with gentle auto-spin + mouse deflection
      groupRef.current.rotation.y += delta * 0.14;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.25,
        0.04
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -mouse.current.x * 0.15,
        0.04
      );

      // Desktop offset: shift slightly rightwards to complement the cockpit
      const isWide = state.size.width >= 1024;
      const targetBaseX = isWide ? 1.3 : 0;

      // Parallax translation
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetBaseX + mouse.current.x * 0.5,
        0.04
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        mouse.current.y * 0.35,
        0.04
      );
    }

    // A. Pulse and organic undulating wave on sphere particles
    if (spherePointsRef.current) {
      const geo = spherePointsRef.current.geometry;
      const posAttr = geo.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      // Mouse influence factor on sphere deformation
      const mouseSpeed = Math.hypot(mouse.current.x, mouse.current.y);

      for (let i = 0; i < sphereCount; i++) {
        const i3 = i * 3;
        const ox = sphereOriginal[i3];
        const oy = sphereOriginal[i3 + 1];
        const oz = sphereOriginal[i3 + 2];

        // Harmonic wave oscillation
        const wave =
          Math.sin(time * 1.8 + ox * 1.2 + oy * 1.2) *
          Math.cos(time * 1.4 + oz * 1.2);
        
        // Fluid factor with breathing pulse
        const pulse = 1 + wave * 0.07 + Math.sin(time * 0.8) * 0.03 + mouseSpeed * 0.04;

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

        // Perlin-like undulating vertical and horizontal wave
        const waveY =
          Math.sin(ox * 0.4 + time * 0.7) * 0.35 +
          Math.cos(oz * 0.4 + time * 0.5) * 0.25;

        const waveX = Math.cos(oy * 0.3 + time * 0.4) * 0.15;

        array[i3] = ox + waveX + mouse.current.x * 0.3;
        array[i3 + 1] = oy + waveY + mouse.current.y * 0.25;
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
          size={0.065}
          vertexColors
          transparent
          opacity={0.88}
          map={glowTexture ?? undefined}
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
          size={0.045}
          vertexColors
          transparent
          opacity={0.65}
          map={glowTexture ?? undefined}
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
      // Normalized coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.targetX = x;
      mouse.current.targetY = y;
    };

    // Subtly animate even when mouse is static
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
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 46, near: 0.1, far: 100 }}
        dpr={[1, 1.75]} // Optimized pixel ratio for 60fps performance
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ pointerEvents: "none" }}
      >
        {/* Subtle ambient light for depth */}
        <ambientLight intensity={0.4} />

        <ParticleScene mouse={mouse} />
      </Canvas>
    </div>
  );
}
