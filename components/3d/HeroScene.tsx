"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Stars, Float } from "@react-three/drei";
import * as THREE from "three";
import { useDRS } from "@/components/providers/DRSContext";

export default function HeroScene() {
    const { isDRSEnabled } = useDRS();
    const orbRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!orbRef.current) return;

        // Rotation logic
        const speed = isDRSEnabled ? 2.5 : 0.5;
        orbRef.current.rotation.y += 0.005 * speed;
        orbRef.current.rotation.x += 0.002 * speed;

        // Mouse interaction (parallax)
        const { x, y } = state.pointer;
        orbRef.current.position.x = THREE.MathUtils.lerp(orbRef.current.position.x, x * 0.5, 0.1);
        orbRef.current.position.y = THREE.MathUtils.lerp(orbRef.current.position.y, y * 0.5, 0.1);
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#FF8000" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#00ffff" />

            <Float speed={isDRSEnabled ? 4 : 2} rotationIntensity={0.5} floatIntensity={1}>
                <Sphere ref={orbRef} args={[1, 64, 64]} scale={2}>
                    <MeshDistortMaterial
                        color="#FF8000" // Papaya
                        attach="material"
                        distort={isDRSEnabled ? 0.6 : 0.3}
                        speed={isDRSEnabled ? 4 : 1.5}
                        roughness={0.2}
                        metalness={0.8}
                        emissive="#FF4500"
                        emissiveIntensity={isDRSEnabled ? 0.8 : 0.2}
                    />
                </Sphere>
            </Float>

            <Stars
                radius={100}
                depth={50}
                count={isDRSEnabled ? 7000 : 2000}
                factor={4}
                saturation={0}
                fade
                speed={isDRSEnabled ? 3 : 0.5}
            />

            {/* Fog to blend edges */}
            <fog attach="fog" args={["#000", 5, 20]} />
        </>
    );
}
