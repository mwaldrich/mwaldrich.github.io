import * as React from "react";
import {TextureLoader} from "three";
import { animated, useSpring, useChain } from "@react-spring/three"
import { useTexture } from '@react-three/drei'
import { useEffect } from 'react'

export default function Augur(props) {

    const texture = useTexture("./augur.png");

    const ref = React.useRef();

    const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { mass: 2, tension: 200 } }), [])
    useEffect(() => {
        let timeout
        const rotate = () => {
        // api.start({ rotation: [(Math.random() - 0.5) * Math.PI * 3, 0, (Math.random() - 0.5) * Math.PI * 3] })
        api.start({ rotation: [0, (Math.random() - 0.5) * Math.PI /*- (Math.PI/4)*/, 0] })
        timeout = setTimeout(rotate, (0.5 + Math.random() * 2) * 3000)
        }
        rotate()
        return () => void clearTimeout(timeout)
    }, [])


    return (
        <animated.mesh
            ref={ref}
            /* on top of the arcade cabinet: position={[-0.5, 1.23, 0.6]}*/
            position={[-0.8, 1.33, 0.25]}
            onClick={() => {window.open("https://github.com/nuprl/augur", '_blank');}}
            {...spring}
             >
            <boxBufferGeometry args={[0.3, 0.3, 0.01]} />
            <meshPhongMaterial
                transparent={true}
                shininess={80}
                map={texture} />
        </animated.mesh>
    )
}
