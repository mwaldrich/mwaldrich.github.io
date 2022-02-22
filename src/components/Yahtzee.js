import { useEffect } from 'react'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function Yahtzee() {
  const fbx = useLoader(FBXLoader, './dice-blendswap-centered.fbx')
  // const { nodes } = useGLTF('./level-react-draco.glb')
  // const [matcap] = useMatcapTexture('489B7A_A0E7D9_6DC5AC_87DAC7', 1024)

  const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { mass: 5, tension: 200 } }), [])
  useEffect(() => {
    let timeout
    const rotate = () => {
      api.start({ rotation: [(Math.random() - 0.5) * Math.PI * 3, 0, (Math.random() - 0.5) * Math.PI * 3] })
      timeout = setTimeout(rotate, (0.5 + Math.random() * 2) * 1000)
    }
    rotate()
    return () => void clearTimeout(timeout)
  }, [])

  return (
    <group /* {...spring} */
        rotation={[0, Math.PI / 2, Math.PI/4]}
    >
      <primitive
        object={fbx}
        /*position={[1, 1, 0]}*/
        position={[-0.8, 1.33, 0.25]}
        scale={[0.001, 0.001, 0.001]}
      />
    </group>
    /*
    <a.mesh geometry={nodes.Pyramid.geometry} position={[-0.8, 1.33, 0.25]} {...spring}>
      <meshMatcapMaterial matcap={matcap} />
    </a.mesh>
    */
  )
}
