import React from 'react'
import {Turntable, PitchFader, VolumeFader} from '../components'
import anime from 'animejs'
import {Howl} from 'howler'

class SourceChannel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pitch: 1.0,
      vol: 0.5
    }
    this.sounds = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      loop: true,
      volume: 0.5,
      sprite: {
        clap: [0, 63529.43310657596],
        'club-beat': [65000, 109714.28571428572],
        'fast-hats': [176000, 53333.33333333334]
      }
    })
    this.sourceId = 0
    this.sourceName = 'club-beat'
    this.soundKeys = Object.keys(this.sounds._sprite)
    //keeps track of the sound 'id' returned from a playing howl
  }

  startSource = name => {
    const sounds = this.sounds
    const spin = anime({
      targets: `.tt-source`,
      rotate: [{value: '1turn'}],
      loop: true,
      easing: 'linear',
      duration: 2500
    })

    if (!sounds.playing(this.sourceId)) {
      this.sourceId = sounds.play(name)
    } else {
      sounds.pause(this.sourceId)
      spin.pause()
    }
  }

  handlePitch = evt => {
    const sounds = this.sounds
    this.setState({pitch: evt.target.value})

    const rate = Number(this.state.pitch)
    sounds.rate(rate, this.sourceId)
  }

  handleVol = evt => {
    const sounds = this.sounds
    this.setState({vol: evt.target.value})

    const vol = Number(this.state.vol)
    sounds.volume(vol, this.sourceId)
  }

  changeSound = evt => {
    const sounds = this.sounds
    this.sourceName = evt.target.value
    if (sounds.playing(this.sourceId)) {
      sounds.pause(this.sourceId)
      this.sourceId = sounds.play(this.sourceName)
    } else {
      this.sourceId = this.startSource(this.sourceName)
    }
  }

  render() {
    return (
      <div className="channel-container">
        <div className="tt-source">
          <Turntable
            animClass=".tt-source"
            handleStart={() => {
              this.startSource(this.sourceName)
            }}
          />
        </div>
        <div className="faders-container">
          <div className="fader-with-label">
            <PitchFader
              name="source-pitch"
              value={this.state.pitch}
              onChange={this.handlePitch}
            />
            <div className="fader-label">pitch</div>
          </div>
          <div className="fader-with-label">
            <VolumeFader
              name="source-volume"
              value={this.state.vol}
              onChange={this.handleVol}
            />
            <div className="fader-label">vol.</div>
          </div>
        </div>
        {this.props.tutorialMode ? (
          <div className="channel-label-container">
            <h3>{this.props.label}</h3>
          </div>
        ) : (
          <select
            //value={this.source}
            className="change-sound"
            onChange={this.changeSound}
          >
            <option>choose sound</option>
            {this.soundKeys.map((name, index) => (
              <option key={index} className="sound-options" value={name}>
                {name}
              </option>
            ))}
          </select>
        )}
      </div>
    )
  }
}

export default SourceChannel
