import React, {useRef, useEffect} from 'react'
import Anime from 'react-anime'
import * as Tone from 'tone'

export default function PitchSlider() {
  const target = useRef(null)

  useEffect(() => {
    target.current = new Tone.Synth().toDestination()
  }, [])

  const startTargetLoop = () => {
    target.current.triggerAttackRelease('E2', '8n')
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
          <div className="pitch-slider" />
        </div>
        <div className="target" ref={target} onClick={startTargetLoop} />
      </Anime>
    </>
  )
}
