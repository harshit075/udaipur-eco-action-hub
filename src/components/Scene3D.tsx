
import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#10b981"
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};

const FloatingElements = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8
          ]}
          scale={Math.random() * 0.1 + 0.05}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial color={`hsl(${120 + Math.random() * 60}, 70%, 50%)`} />
        </mesh>
      ))}
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full animate-pulse backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <div className="text-white">Loading 3D Scene...</div>
        </div>
      }>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 75 }}
          onCreated={({ gl }) => {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
          
          <AnimatedSphere />
          <FloatingElements />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene3D;
