import { Clone,useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'

const Dog = (props) => {
    
    const model = useGLTF('./Dog/scene.gltf')
    const animations = useAnimations(model.animations, model.scene)
    useEffect(()=>{
        console.log();
        
        animations.actions.walksent.play()
        // window.setTimeout(()=>{
            
        // animations.actions.Run.play()
        // animations.actions.Run.crossFadeFrom(animations.actions.Walk, 10)
        // },2000)
    }, [])
  return (
    <>
    <primitive object={model.scene} {...props}/>

</>
  )
}

export default Dog