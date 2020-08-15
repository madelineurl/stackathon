import React from 'react'
import Anime from 'react-anime'
import {Howl} from 'howler'
import {PitchFader, VolumeFader} from '../components'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sourcePitch: 1.0,
      sourceVol: 0.5,
      targetPitch: 1.0,
      targetVol: 0.5
    }
    this.sounds = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      loop: true,
      volume: 0.5,
      sprite: {
        source: [0, 109714.28571428571],
        target: [111000, 63529.43310657596]
      }
    })
    this.source = 0
    this.target = 0
  }

  startSource = () => {
    const sounds = this.sounds
    if (!sounds.playing(this.source)) {
      this.source = sounds.play('source')
    } else {
      sounds.pause(this.source)
    }
  }

  startTarget = () => {
    const sounds = this.sounds
    if (!sounds.playing(this.target)) {
      this.target = sounds.play('target')
    } else {
      sounds.pause(this.target)
    }
  }

  handleSourcePitch = evt => {
    this.setState({sourcePitch: evt.target.value})
    const rate = Number(this.state.sourcePitch)
    //console.log('source pitch val', rate)
    this.sounds.rate(rate, this.source)
  }

  handleSourceVol = evt => {
    this.setState({sourceVol: evt.target.value})
    const vol = Number(this.state.sourceVol)
    //console.log('source vol', vol);
    this.sounds.volume(vol, this.source)
  }

  handleTargetPitch = evt => {
    this.setState({targetPitch: evt.target.value})
    const rate = Number(this.state.targetPitch)
    //console.log('target pitch val', rate)
    this.sounds.rate(rate, this.target)
  }

  handleTargetVol = evt => {
    this.setState({targetVol: evt.target.value})
    const vol = Number(this.state.targetVol)
    //console.log('target vol', vol);
    this.sounds.volume(vol, this.target)
  }

  render() {
    return (
      <div className="game-container">
        <div className="sounds-container">
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
        </div>
        <div className="faders">
          <div className="source-faders">
            <PitchFader
              name="source-pitch"
              value={this.state.sourcePitch}
              onChange={this.handleSourcePitch}
            />
            <VolumeFader
              name="source-volume"
              value={this.state.sourceVol}
              onChange={this.handleSourceVol}
            />
          </div>
          <div className="target-faders">
            <PitchFader
              name="target-pitch"
              value={this.state.targetPitch}
              onChange={this.handleTargetPitch}
            />
            <VolumeFader
              name="target-volume"
              value={this.state.targetVol}
              onChange={this.handleTargetVol}
            />
          </div>
        </div>
        <div className="fader-labels-container">
          <div className="source-labels">
            <div className="fader-label">pitch</div>
            <div className="fader-label">vol.</div>
          </div>
          <div className="target-labels">
            <div className="fader-label">pitch</div>
            <div className="fader-label">vol.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
