"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/**
 * HeroScene — the authored focal 3D moment for the portfolio hero.
 *
 * An original abstract brand object embodying the Neumorphic Studio palette:
 * deep obsidian slate knot wrapped by an electric indigo wireframe shell,
 * lit with soft directional light and warm amber counter-reflection.
 */
function BrandKnot() {
  const group = useRef();
  const inner = useRef();

  // Pointer eased toward targets in useFrame (no React state churn).
  const target = useMemo(() => ({ x: 0, y: 0 }), []);

  useFrame((state, delta) => {
    // Smoothly ease the current rotation toward the pointer + idle drift.
    target.x = state.pointer.y * 0.35;
    target.y = state.pointer.x * 0.5;

    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        target.x,
        3,
        delta
      );
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        target.y + state.clock.elapsedTime * 0.08,
        3,
        delta
      );
    }

    if (inner.current) {
      inner.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group ref={group}>
      {/* Electric Indigo wireframe outer shell — structural motif */}
      <mesh>
        <torusKnotGeometry args={[1.35, 0.42, 220, 32, 2, 3]} />
        <meshBasicMaterial
          color="#6366F1"
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>

      {/* Obsidian slate inner knot with soft organic distort */}
      <mesh ref={inner} castShadow>
        <torusKnotGeometry args={[1.1, 0.5, 200, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#1E293B"
          emissive="#312E81"
          emissiveIntensity={0.4}
          roughness={0.25}
          metalness={0.8}
          distort={0.32}
          speed={1.5}
        />
      </mesh>

      {/* Sunset Amber accent ring — warm focal counterpoint */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.0, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#F97316"
          roughness={0.35}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene({ reduced = false, active = true }) {
  if (reduced) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} castShadow />
      <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#EEF2F6" />
      <pointLight position={[0, 3, 4]} intensity={0.9} color="#4F46E5" />

      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.6}>
        <BrandKnot />
      </Float>

      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.38}
        scale={8}
        blur={2.5}
        far={4}
        color="#8B9DB4"
      />
    </Canvas>
  );
}
