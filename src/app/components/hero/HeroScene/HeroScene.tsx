import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useIsMobile } from "../../../hooks/useIsMobile";
import styles from "./heroScene.module.scss";

const SPHERE_RADIUS = 1.7;

const generateSpherePoints = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = SPHERE_RADIUS * (0.85 + Math.random() * 0.25);

    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[index * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
};

const ParticleField = ({ count }: { count: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => generateSpherePoints(count), [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.08;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#9b86ff"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const InnerOrb = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.4;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.7}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.85, 1]} />
        <meshStandardMaterial
          color="#7c5cff"
          emissive="#3b2bbb"
          emissiveIntensity={0.6}
          roughness={0.25}
          metalness={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
};

export const HeroScene = () => {
  const isMobile = useIsMobile();
  const particleCount = isMobile ? 600 : 1400;

  return (
    <div className={styles.scene} aria-hidden>
      <Canvas
        dpr={[1, isMobile ? 1.4 : 2]}
        camera={{ position: [0, 0, 4.5], fov: 55 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={1.2} color="#7c5cff" />
        <pointLight position={[-3, -2, -2]} intensity={1} color="#00d4ff" />
        <Suspense fallback={null}>
          <ParticleField count={particleCount} />
          <InnerOrb />
        </Suspense>
      </Canvas>
      <div className={styles.glow} />
    </div>
  );
};
