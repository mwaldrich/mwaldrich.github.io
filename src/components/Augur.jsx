/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 bluebird_origami/scene.gltf --transform 
Files: bluebird_origami/scene.gltf [9.7KB] > scene-transformed.glb [364.31KB] (-3656%)
Author: patrakeevasveta (https://sketchfab.com/patrakeevasveta)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bluebird-origami-c7d2b4293eb6462389da80c0747acdd0
Title: Bluebird origami
*/

import * as React from "react";
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from "@react-spring/three"
import { useEffect, useState } from 'react'

export function AugurNew(props) {
  const { nodes, materials } = useGLTF('/augur.glb')

  const ref = React.useRef()
  const [hovered, setHovered] = useState(false)

    const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { mass: 2, tension: 200 } }), [])
    useEffect(() => {
        let timeout
        const rotate = () => {
        // api.start({ rotation: [(Math.random() - 0.5) * Math.PI * 3, 0, (Math.random() - 0.5) * Math.PI * 3] })
        // (Math.random() - 0.5) * Math.PI /*- (Math.PI/4)*/
        api.start({ rotation: [-Math.PI / 2, 0, (Math.random() - 0.5) * Math.PI] })
        timeout = setTimeout(rotate, (0.5 + Math.random() * 2) * 3000)
        }
        rotate()
        return () => void clearTimeout(timeout)
    }, [])

    console.log(`Augur-new spring:`)
    console.dir(spring)

  return (
    <group {...props}
      ref={ref}
      dispose={null}
      onClick={() => { window.open("https://github.com/nuprl/augur", '_blank'); }}
      position={[-0.8, 1.23, 0.18]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <a.mesh geometry={nodes.Vert_bluebird_0.geometry} material={materials.bluebird} {...spring}  scale={0.068}>
        // Set color to yellow if hovered
        { hovered?
          <meshStandardMaterial color={'yellow'} />
        : <></>
        }
      </a.mesh>
    </group>
  )
}

useGLTF.preload('/augur.glb')
