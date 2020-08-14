import React, {useRef, useState, useEffect} from 'react'
import * as Tone from 'tone'
import Anime from 'react-anime'
import {PitchSlider} from '../components'

class PitchFader extends React.Component {
  render() {
    return (
      <>
        <Anime
          easing="easeInSine"
          duration={1000}
          direction="normal"
          loop={false}
          delay={(el, index) => index * 100}
          // translateX='10rem'
          // translateY='5rem'
          scale={[0.75, 0.9]}
        >
          <div className="target" />
        </Anime>
        <PitchSlider />
      </>
    )
  }
}

export default PitchFader

//const target = useRef(null)
// const [counter, setCounter] = useState(0);
// const [loop, setLoop] = useState(null);

// useEffect(() => {
//   //console.log('re-rendering!')
//   target.current = new Tone.Synth().toDestination()

// }, [target])

// const startTargetLoop = () => {
//   target.current.triggerAttackRelease('E2', '8n') //include time!
//   // let part = new Tone.Part(
//   //   (time, note) => {
//   //     //console.log('inside source loop!')
//   //     target.current.triggerAttackRelease(note, '8n', time)
//   //   },
//   //   [[0, 'C2'], ['0:2', 'C3'], ['0:3:2', 'G2']]
//   // )
//   // part.loop = true
//   // //console.log(part)
//   // part.start(0)
//   //Tone.Transport.start();
// }
