import React, {useState, useEffect, useRef} from 'react'
import anime from 'animejs/lib/anime.es.js'
import {Tone} from 'tone'

import {Navbar} from './components'
import Routes from './routes'
//import pad from './public/pad.mp3'

const App = () => {
  const [isLoaded, setLoaded] = useState(false)
  const synth = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    synth.current = Tone.Synth().toDestination()
  }, [])

  useEffect(() => {
    animationRef.current = anime({
      targets: '.el',
      translateX: 250,
      delay: function(el, i) {
        return i * 100
      },
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    })
  }, [])

  const handleClick = () => synth.current.triggerAttack('A1')

  return (
    <>
      <div>
        <Navbar />
        <Routes />
      </div>
      <div className="App">
        <button type="button" onClick={() => animationRef.current.restart()}>
          Restart animation
        </button>
        <div className="el" />
        <button type="button" disabled={!isLoaded} onClick={handleClick}>
          Start sound
        </button>
      </div>
    </>
  )
}

export default App

// let semitones = 3;
// let source = new Tone.Player(AudioBuffer);
// let shift = new Tone.PitchShift(semitones);
// source.connect(shift);
// shift.toMaster();
// source.start();
