"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/**
 * HeroScene — the authored focal 3D moment for the portfolio hero.
 *
 * An original abstract brand object (NOT the MoncyDev portfolio asset, which is
 * proprietary and must not be reused). It embodies the Warm Luxury palette:
 * a deep midnight knot wrapped by a tangerine wireframe shell, lit softly,
 * floating gently and reacting to pointer + scroll.
 *
 * Accessibility / performance (AI_RULE.md §5, .agents/skills/animate,
 * .agents/skills/accessible-animation):
 * - This canvas is only mounted when motion is allowed. Under
 *   prefers-reduced-motion the caller renders a static fallback instead, so
 *   there is no WebGL loop, no auto-rotation, no vestibular trigger.
 * - Only the GPU does work here; pointer/scroll feed eased targets, never
 *   re-rendering React on every frame.
 * - dpr is capped so mid-range phones are not pushed to full retina cost.
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
      {/* Tangerine wireframe outer shell — structural, "raw" motif */}
      <mesh>
        <torusKnotGeometry args={[1.35, 0.42, 220, 32, 2, 3]} />
        <meshBasicMaterial
          color="#F26A3D"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Midnight inner knot with a soft organic distort — the mass */}
      <mesh ref={inner} castShadow>
        <torusKnotGeometry args={[1.1, 0.5, 200, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#172C46"
          emissive="#22406a"
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.85}
          distort={0.35}
          speed={1.6}
        />
      </mesh>

      {/* Warm ivory accent ring — luxury counterpoint */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.0, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#E9E5F5"
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene({ reduced = false, active = true }) {
  // The caller decides whether to mount this at all; this guard is a safety net.
  if (reduced) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -2, -3]} intensity={0.6} color="#E9E5F5" />
      <pointLight position={[0, 3, 4]} intensity={0.8} color="#F26A3D" />

      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.6}>
        <BrandKnot />
      </Float>

      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.35}
        scale={8}
        blur={2.6}
        far={4}
        color="#172C46"
      />
    </Canvas>
  );
}