import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb({ mouse }) {
  const meshRef = useRef()
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.18 + mouse.current[1] * 0.3
    meshRef.current.rotation.y = t * 0.22 + mouse.current[0] * 0.3
  })
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.55, 4]} />
        <MeshDistortMaterial
          color="#6366f1"
          distort={0.45}
          speed={2}
          roughness={0.12}
          metalness={0.85}
          envMapIntensity={0.8}
        />
      </mesh>
    </Float>
  )
}

function Ring({ radius, tube, rotation, color, speed }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.x += speed * 0.005
    ref.current.rotation.y += speed * 0.003
  })
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 16, 80]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} wireframe />
    </mesh>
  )
}

function ParticleField() {
  const count = 2000
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 2.5 + Math.random() * 4
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#6366f1" size={0.025} sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

function Scene({ mouse }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]}   color="#6366f1" intensity={4} />
      <pointLight position={[-4, -3, -4]} color="#8b5cf6" intensity={3} />
      <pointLight position={[0, 4, -4]}   color="#06b6d4" intensity={2} />
      <FloatingOrb mouse={mouse} />
      <Ring radius={2.4} tube={0.008} rotation={[0.4, 0, 0]}   color="#6366f1" speed={0.8} />
      <Ring radius={2.9} tube={0.006} rotation={[0, 0.6, 0.3]} color="#8b5cf6" speed={-0.5} />
      <Ring radius={3.4} tube={0.005} rotation={[1.2, 0, 0.6]} color="#06b6d4" speed={0.3} />
      <ParticleField />
    </>
  )
}

export default function Scene3D({ mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene mouse={mouse} />
    </Canvas>
  )
}
