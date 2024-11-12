import { Leva , useControls} from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { calculateSizes } from '../constants/index.js';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import Button from '../components/Button.jsx';
import Toruss from '../components/Toruss.jsx';
import Fox from '../components/Fox.jsx';
import Dog from '../components/Dog.jsx';


const Hero = () => {


  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Prince😒
        </p>
        <p className="hero_tag text-white">Welcome to my website!<span 
          className="waving-hand"
          ></span></p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
      <Canvas className="w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 29]} />
        <HackerRoom 
        position={sizes.deskPosition}
        // rotation={[0,0, 0]}
        // scale={sizes.deskScale}
      //  position={[2.5,-7.3, 2.5]}
        rotation={[0.2,0.4,0]}
        scale={isMobile ? 0.1 : 0.13 }
        />
        <group>
          <Toruss position={sizes.reactLogoPosition} />
          <Dog position={sizes.cubePosition} scale={sizes.dogScale} rotation-y={90}/>
          <Fox scale={sizes.deskScale} position={sizes.targetPosition} rotation-y={0.8}/>
          <Rings position={sizes.ringPosition} />
          
          
        </group>
        <ambientLight intensity={1}/>
        <directionalLight position={[10,10,10]} intensity={0.5} />
      </Suspense>
      </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-1/2 mx-auto z-10 c-space">
        <a href="#about" className="w-fit">
          
          <Button name="Contact Me" isBeam containerClass="sm:w-fit w-full sm:min-w-96" /> 
        </a>
      </div>

      </section>
  )
}

export default Hero;