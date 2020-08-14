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
    //target.current.triggerAttackRelease('E2', '8n')
    const loop = new Tone.Loop(time => {
      console.log('inside source loop!')
      source.current.triggerAttackRelease('A2', '8n', time)
    }, '4n').start(0)
    Tone.Transport.start()
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
