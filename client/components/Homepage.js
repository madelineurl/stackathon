import React, {useState, useEffect, useRef} from 'react'
import anime from 'animejs/lib/anime.es.js'
import * as Tone from 'tone'

export const HomePage = () => {
  //const [isLoaded, setLoaded] = useState(false)
  const synth = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    synth.current = new Tone.Synth({
      onload: () => {
        setLoaded(true)
      }
    }).toDestination()
  }, [])

  useEffect(() => {
    animationRef.current = anime({
      targets: '.el',
      translateX: 500,
      translateY: 100,
      delay: function(el, i) {
        return i * 100
      },
      loop: false,
      direction: 'alternate',
      easing: 'easeInOutSine'
    })
  }, [])

  const handleClick = () => synth.current.triggerAttack('A1')

  return (
    <>
      <div className="homepage">
        <p>Click the button below to hear a synth</p>
      </div>
      <div className="el" onClick={handleClick} />
    </>
  )
}

export default HomePage

// let semitones = 3;
// let source = new Tone.Player(AudioBuffer);
// let shift = new Tone.PitchShift(semitones);
// source.connect(shift);
// shift.toMaster();
// source.start();
