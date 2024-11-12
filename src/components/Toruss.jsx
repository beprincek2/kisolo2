import { useGSAP } from '@gsap/react'; 
import { Center, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useRef } from 'react';

const Toruss = ({ position }) => {
  const meshRef = useRef();

  const texture = useTexture('/textures/3.png'); // Replace with your texture

  useGSAP(
    () => {
      if (!meshRef.current) return;

      meshRef.current.position.set(position[0], position[1], position[2]);

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(meshRef.current.rotation, {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
        });
    },
    {
      dependencies: position,
    }
  );

  return (
    <Center>
      <group scale={0.9}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.5, 100, 16]} /> {/* Adjust args as needed */}
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Center>
  );
};

export default Toruss;