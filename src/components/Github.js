import * as React from "react";
import {TextureLoader} from "three";
import { animated, useSpring, useChain } from "@react-spring/three"
import { useTexture } from '@react-three/drei'

export function Github(props) {

    const texture = useTexture("./github.png");
    const marbleTexture = React.useMemo(() => new TextureLoader().load("textures/marble.jpg"), []);
    const redMarbleTexture = React.useMemo(() => new TextureLoader().load("textures/red-marble.jpg"), []);

    // TODO: animation when hovered. grow bigger and set cursor to click hand

    // {...animatedProps}
    // scale={[0.5, 0.2, 0.5]} >
    //     <sphereBufferGeometry args={[0.6, 32, 32]} />
    return (
        <animated.mesh
            position={[0.65, 1.2, -0.9]}
            onClick={() => {window.open("https://github.com/mwaldrich", '_blank');}}
             >
            <boxBufferGeometry args={[0.3, 0.3, 0.01]} />
            <meshPhongMaterial
                transparent={true}
                shininess={80}
                map={texture} />
        </animated.mesh>
    )
}