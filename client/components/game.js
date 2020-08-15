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
        <div className="channel-container">
          <Anime
            easing="easeInSine"
            duration={2000}
            direction="normal"
            delay={(el, index) => index * 50}
            //translateX='5rem, 0'
            // translateY='5rem'
            scale={[0.75, 0.9]}
          >
            <div className="sound" onClick={this.startSource} />
          </Anime>
          <div className="faders-container">
            <div className="fader-with-label">
              <PitchFader
                name="source-pitch"
                value={this.state.sourcePitch}
                onChange={this.handleSourcePitch}
              />
              <div className="fader-label">pitch</div>
            </div>
            <div className="fader-with-label">
              <VolumeFader
                name="source-volume"
                value={this.state.sourceVol}
                onChange={this.handleSourceVol}
              />
              <div className="fader-label">vol.</div>
            </div>
          </div>
          <div className="channel-label-container">
            <h3>SOURCE</h3>
          </div>
        </div>
        <div className="channel-container">
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
            <div className="sound" onClick={this.startTarget} />
          </Anime>
          <div className="faders-container">
            <div className="fader-with-label">
              <PitchFader
                name="target-pitch"
                value={this.state.targetPitch}
                onChange={this.handleTargetPitch}
              />
              <div className="fader-label">pitch</div>
            </div>
            <div className="fader-with-label">
              <VolumeFader
                name="target-volume"
                value={this.state.targetVol}
                onChange={this.handleTargetVol}
              />
              <div className="fader-label">vol.</div>
            </div>
          </div>
          <div className="channel-label-container">
            <h3>TARGET</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
