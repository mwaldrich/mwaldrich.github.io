import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import Level from './components/Level'
import Sudo from './components/Sudo'
import Camera from './components/Camera'
import Cactus from './components/Cactus'
import Icon from './components/Icon'
import Pyramid from './components/Pyramid'
import { Github } from './components/Github'
import { LinkedIn } from './components/LinkedIn'
import { Projects } from './components/Projects'
import Yahtzee from './components/Yahtzee'
import Augur from './components/Augur'
import { AugurNew } from './components/Augur'

export default function App() {
  // <Projects />
  // <Yahtzee />
  // <Pyramid />
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 1.25, 6] }}>
      <color attach="background" args={['#e0b7ff']} />
      <ambientLight />
      <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <group position-y={-0.75} dispose={null}>
          <Level />
          <Camera />
          <Cactus />
          <Icon />
          <Github />
          <LinkedIn />
          <Yahtzee />
          <Sudo />
          <AugurNew />
        </group>
      </PresentationControls>
    </Canvas>
  )
}
