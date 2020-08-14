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
    this.state = {value: 1.0}
    this.audio = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      loop: true,
      sprite: {
        source: [0, 109714.28571428571],
        target: [111000, 63529.43310657596]
      }
    })
    this.target = 0
  }

  handleSource = () => {
    this.audio.play('source')
  }

  handleTarget = () => {
    this.target = this.audio.play('target')
  }

  handleChange = evt => {
    this.setState({value: evt.target.value})

    const num = Number(this.state.value)

    console.log(num)

    this.audio.rate(num, this.target)
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
                easing="easeInSine"
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
                easing="easeInSine"
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
          <div className="pitch-slider-wrapper">
            <input
              name="pitch-slider"
              type="range"
              step=".001"
              className="pitch-slider"
              min="0.9"
              max="1.1"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
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
