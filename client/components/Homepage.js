import React, {useEffect, useRef} from 'react'
//import anime from 'animejs/lib/anime.es.js'
import * as Tone from 'tone'
import Anime from 'react-anime'

export const Homepage = () => {
  const source = useRef(null)
  const target = useRef(null)

  useEffect(() => {
    source.current = new Tone.Synth().toDestination()
  }, [])

  useEffect(() => {
    target.current = new Tone.Synth().toDestination()
  }, [])

  const startSourceLoop = () => {
    console.log('clicked')
    //source.current.triggerAttackRelease('A2', '8n');
    Tone.Transport.scheduleRepeat(
      function(time) {
        source.current.triggerAttackRelease(time)
      },
      '8n',
      '1m'
    )
    // const loop = new Tone.Loop(time => {
    //   console.log('inside source loop!')
    //   source.current.triggerAttackRelease('A5', '8n', time)
    // }, '4n').start(0);
    // loop.start();
    Tone.Transport.start()
  }

  const startTargetLoop = () => {
    target.current.triggerAttackRelease('E2', '8n')
  }

  return (
    <>
      <div className="homepage-info">
        <p>Welcome!</p>
        <p>Click the blue square to hear the source pattern</p>
        <p>Click the purple square to start the target pattern</p>
        <p>
          Drag along the pitch slider or use up and down arrows to adjust the
          speed until the notes play in harmony
        </p>
      </div>
      <div className="game-container">
        <div className="source-container">
          <Anime
            easing="easeInSine"
            duration={1000}
            direction="alternate"
            loop={false}
            delay={(el, index) => index * 50}
            // translateX='10rem'
            // translateY='5rem'
            scale={[0.75, 0.9]}
          >
            <div className="source" ref={source} onClick={startSourceLoop} />
          </Anime>
        </div>
        <div className="target-container">
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
        </div>
      </div>
    </>
  )
}

export default Homepage

// let semitones = 3;
// let source = new Tone.Player(AudioBuffer);
// let shift = new Tone.PitchShift(semitones);
// source.connect(shift);
// shift.toMaster();
// source.start();

// useEffect(() => {
//   animationRef.current = anime({
//     targets: '.el',
//     translateX: '50vw',
//     translateY: 100,
//     delay: function(el, i) {
//       return i * 100
//     },
//     loop: false,
//     direction: 'alternate',
//     easing: 'easeInOutSine'
//   })
// }, [])
