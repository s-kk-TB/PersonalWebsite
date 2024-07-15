import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Html, useProgress, Environment } from '@react-three/drei';
import { Suspense } from 'react'; 

function Loader(){
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>
}

export default function Viewport(){
    const thoughtElement =  useLoader(GLTFLoader,'/models/thoughtElement.glb');

    return(
        <Canvas camera={{ 
            // position: [0,-1,5], 
            // rotation: [0.175,0,0]
            }}>
            <Suspense fallback={<Loader />}>
                <primitive object={thoughtElement.scene}
                    // rotation = {[ -1, 0, 0 ]}
                    // position = {[ -2, 0, 0 ]}
                />
                <Environment files="../models/preller_drive_1k.hdr" />
            </Suspense>
        </Canvas>
    );
}