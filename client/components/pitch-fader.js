import React, {useRef, useEffect} from 'react'
import * as Tone from 'tone'
import Anime from 'react-anime'
import {PitchSlider} from '../components'

const PitchFader = () => {
  const target = useRef(null)

  useEffect(() => {
    target.current = new Tone.Synth().toDestination()
  }, [])

  const startTargetLoop = () => {
    target.current.triggerAttackRelease('E3', '8n') //include time!
    let part = new Tone.Part(
      (time, note) => {
        //console.log('inside source loop!')
        target.current.triggerAttackRelease(note, '8n', time)
      },
      [[0, 'C2'], ['0:2', 'C3'], ['0:3:2', 'G2']]
    )
    part.loop = true
    console.log(part)
    part.start()
    //Tone.Transport.start();
  }

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
        <div className="pitch">
          <PitchSlider />
        </div>
        <div className="target" ref={target} onClick={startTargetLoop} />
      </Anime>
    </>
  )
}

export default PitchFader
