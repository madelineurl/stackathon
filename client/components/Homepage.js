import React, {useState, useEffect, useRef} from 'react'
import {PitchSlider} from '../components'
//import anime from 'animejs/lib/anime.es.js'
import * as Tone from 'tone'
import Anime from 'react-anime'

class Homepage extends React.Component {
  render() {
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
          <div className="sounds-container">
            <div>
              <Anime
                easing="easeInSine"
                duration={1000}
                direction="normal"
                delay={(el, index) => index * 50}
                //translateX='5rem'
                // translateY='5rem'
                scale={[0.75, 0.9]}
              >
                <div className="source" />
              </Anime>
            </div>
            <div>
              <Anime
                easing="easeInSine"
                duration={1000}
                direction="normal"
                loop={false}
                delay={(el, index) => index * 100}
                //translateX='-5rem'
                // translateY='5rem'
                scale={[0.75, 0.9]}
              >
                <div className="target" />
              </Anime>
            </div>
          </div>
          <PitchSlider />
        </div>
      </>
    )
  }
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

// const source = useRef(null)
// const [counter, setCounter] = useState(0);
// const [loop, setLoop] = useState(null);
// //const [sourcePlaying, setSourcePlaying] = useState(false);

// useEffect(() => {
//   source.current = new Tone.PolySynth().toDestination()
//   // setLoop(new Tone.Loop(song, '16n'));
//   // Tone.Transport.start();
//   // loop.start(0);
// }, [source])

// function song(time) {
//   source.current.triggerAttackRelease('E3', '8n', time, 1)

//   setCounter((counter) + 1 % 16);
// }

// const startSourceLoop = () => {
//   source.current.triggerAttackRelease('E3', '8n') //include time!
//   // let part = new Tone.Part((time, note) => {
//   //   source.current.triggerAttackRelease(note, '8n', time)
//   // }, [0, 'A2']);
//   // part.loop = true;
//   // part.start(0);
//   // if (!sourcePlaying) {
//   //   part.start()
//   //   //setSourcePlaying(true)
//   // } else {
//   //   part.stop();
//   //   //setSourcePlaying(false);
//   // }
// }
