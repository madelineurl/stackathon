import React, {useState, useEffect, useRef} from 'react'
import {PitchSlider, Cube} from '../components'
//import anime from 'animejs/lib/anime.es.js'
//import * as Tone from 'tone'
import Anime from 'react-anime'
import {Howl} from 'howler'
//import ConfettiGenerator from "confetti-js"

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.audio = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      loop: true,
      sprite: {
        source: [0, 109714.28571428571],
        target: [111000, 63529.43310657596]
      }
    })
  }

  handleSource = () => {
    this.audio.play('source')
    // const audio = this.state.audio;
    // if (!this.state.sourcePlaying) {
    //   audio.play('source');
    //   this.setState({ sourcePlaying: true})
    // } else {
    //   audio.stop('source');
    //   this.setState({ sourcePlaying: false})
    // }
  }

  handleTarget = () => {
    this.audio.play('target')
  }

  render() {
    return (
      <>
        <div className="homepage-info" />
        <div className="game-container">
          <div className="sounds-container">
            <div>
              <p>Click the blue square to hear the source pattern</p>
              <Anime
                easing="easeInBounce"
                duration={2000}
                direction="normal"
                delay={(el, index) => index * 50}
                //translateX='5rem, 0'
                // translateY='5rem'
                scale={[0.75, 0.9]}
              >
                <div className="source" onClick={this.handleSource} />
              </Anime>
            </div>
            <div>
              <p>Click the purple square to start the target pattern</p>
              <Anime
                easing="easeInBounce"
                duration={2000}
                direction="normal"
                loop={false}
                delay={(el, index) => index * 100}
                //translateX='-5rem'
                // translateY='5rem'
                scale={[0.75, 0.9]}
              >
                <div className="target" onClick={this.handleTarget} />
              </Anime>
            </div>
          </div>
          <PitchSlider audio={this.audio} />
          {/* <div id='slider-label'>PITCH</div> */}
          <span>
            Drag along the pitch slider to adjust the speed of the target loop
            until the notes play in harmony
          </span>
          <Cube />
        </div>
      </>
    )
  }
}

export default Homepage
