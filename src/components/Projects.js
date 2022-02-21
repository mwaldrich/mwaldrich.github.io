import * as React from "react";
import {TextureLoader} from "three";
import { animated, useSpring, useChain } from "@react-spring/three"
import { Text } from '@react-three/drei'

/*
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'

extend({ TextGeometry })*/

export function Projects(props) {

    // const texture = useTexture("./linkedin.png");

    const ref = React.useRef();

    // TODO: animation when hovered. grow bigger and set cursor to click hand

    // {...animatedProps}
    // scale={[0.5, 0.2, 0.5]} >
    //     <sphereBufferGeometry args={[0.6, 32, 32]} />

    // onPointerEnter={() => {ref.style.cursor = "pointer";}}
    // onPointerLeave={() => {ref.style.cursor = "auto";}}


    // new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front

    return (
        <Text 
            ref={ref} 
            position={[-0.68, 1.875, 0]} 
            rotation={[0, Math.PI / 2, 0]}
            fontSize={0.15} 
            font={"./gill-sans-ultra-bold.ttf"} 
            color="black"
            anchorX="center" 
            anchorY="middle">
        Projects
        </Text>
        /*
        <Text hAlign="right" position={[-12, 6.5, 0]} children="Projects" />
        */
        /*
        <animated.mesh
            ref={ref}
            position={[0.65, 0.8, -0.5]}
            onPointerDown={() => {window.open("https://www.linkedin.com/in/mark-aldrich-1467b2106/", '_blank');}}
             >
            <textGeometry args={["Projects", {font: "Arial"}]} />
            <meshPhongMaterial
                color={0xffffff}
                flatShading={true} />
        </animated.mesh>*/
    )
}