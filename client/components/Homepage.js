import React, {useState, useEffect, useRef} from 'react'
import {PitchFader} from '../components'
//import anime from 'animejs/lib/anime.es.js'
import * as Tone from 'tone'
import Anime from 'react-anime'

export const Homepage = () => {
  const source = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    source.current = new Tone.Synth().toDestination()
  }, [])

  useEffect(() => {
    //console.log('starting transport clock');
    Tone.Transport.bpm.value = 60
    Tone.Transport.start()
    //console.log('tone.transport: ', Tone.Transport);
  })

  const startSourceLoop = () => {
    //console.log('clicked');

    let loop = new Tone.Loop(time => {
      console.log(time)
      console.log('looping')
      //console.log('source: ', source.current)
      source.current.triggerAttackRelease('A2', '8n', time)
    }, '4n')
    //Tone.Transport.start()
    loop.start(0)
  }

  return (
    <>
      <div className="homepage-info">
        <h3>Welcome!</h3>
        <span>Click the blue square to hear the source pattern</span>
        <span>Click the purple square to start the target pattern</span>
        <span>
          Drag along the pitch slider to adjust the speed until the notes play
          in harmony
        </span>
      </div>
      <div className="game-container">
        <div className="source-container">
          <Anime
            easing="easeInSine"
            duration={1000}
            direction="alternate"
            delay={(el, index) => index * 50}
            // translateX='10rem'
            // translateY='5rem'
            scale={[0.75, 0.9]}
          >
            <div className="source" ref={source} onClick={startSourceLoop} />
          </Anime>
        </div>
        <div className="target-container">
          <PitchFader />
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

// useEffect(() => {
//   Tone.Transport.bpm.value = bpm;
// }, [bpm])

// useEffect(() => {
//   if (start) {
//     Tone.Transport.start();
//   } else {
//     Tone.Transport.stop();
//   }
// }, [start])

//const [start, startButton] = useStart();
//const [bpm, setBPM] = useBPM(80);

//source.current.triggerAttackRelease('A2', '8n');
// Tone.Transport.scheduleRepeat(
//   function(time) {
//     source.current.triggerAttackRelease(time)
//   },
//   '4n',
//   '1m'
// )

// const part = new Tone.Part(time => {
//   source.current.triggerAttackRelease('A2', '8n', time)
// }).start(0);
// part.loop = true;
