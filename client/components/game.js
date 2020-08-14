import React from 'react'
import Anime from 'react-anime'
import {Howl} from 'howler'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      targetValue: 1.0,
      sourceValue: 1.0,
      sourcePlaying: false,
      targetPlaying: false
    }
    this.audio = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      loop: true,
      sprite: {
        source: [0, 109714.28571428571],
        target: [111000, 63529.43310657596]
      }
    })
    this.source = 0
    this.target = 0
  }

  startSource = () => {
    if (!this.state.sourcePlaying) {
      this.source = this.audio.play('source')
      this.setState({sourcePlaying: true})
    } else {
      this.audio.pause(this.source)
      this.setState({sourcePlaying: false})
    }
  }

  startTarget = () => {
    if (!this.state.targetPlaying) {
      this.target = this.audio.play('target')
      this.setState({targetPlaying: true})
    } else {
      this.audio.pause(this.target)
      this.setState({targetPlaying: false})
    }
  }

  handleSourceChange = evt => {
    this.setState({sourceValue: evt.target.value})
    const rate = Number(this.state.sourceValue)
    //console.log('source pitch val', rate)
    this.audio.rate(rate, this.source)
  }

  handleTargetChange = evt => {
    this.setState({targetValue: evt.target.value})
    const rate = Number(this.state.targetValue)
    //console.log('target pitch val', rate)
    this.audio.rate(rate, this.target)
  }

  render() {
    return (
      <div className="game-container">
        <div className="sounds-container">
          <div id="source-container">
            <Anime
              easing="easeInSine"
              duration={2000}
              direction="normal"
              delay={(el, index) => index * 50}
              //translateX='5rem, 0'
              // translateY='5rem'
              scale={[0.75, 0.9]}
            >
              <div className="source" onClick={this.startSource} />
            </Anime>
            <div className="pitch-slider-wrapper">
              <input
                name="source-pitch"
                type="range"
                step=".001"
                className="pitch-slider"
                min="0.9"
                max="1.1"
                value={this.state.sourceValue}
                onChange={this.handleSourceChange}
              />
              <div>
                <div id="slider-label">pitch adj.</div>
              </div>
            </div>
          </div>
          <div id="target-container">
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
              <div className="target" onClick={this.startTarget} />
            </Anime>
            <div className="pitch-slider-wrapper">
              <input
                name="target-pitch"
                type="range"
                step=".001"
                className="pitch-slider"
                min="0.9"
                max="1.1"
                value={this.state.targetValue}
                onChange={this.handleTargetChange}
              />
            </div>
            <div>
              <div id="slider-label">pitch adj.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
