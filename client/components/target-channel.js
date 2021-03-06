import React from 'react'
import {Howl} from 'howler'
import anime from 'animejs'
import {Turntable, PitchFader, VolumeFader} from '../components'

class TargetChannel extends React.Component {
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
        clap: [49000, 63529.43310657596],
        'club-beat': [114000, 109714.28571428572],
        'fast-hats': [225000, 53333.333333333314],
        'eager-pads': [0, 41142.857142857145],
        'bmore-club': [46000, 1818.1859410430832],
        'nice-pads': [280000, 27428.571428571446],
        'frantic-hat': [43000, 1776.3265306122448]
      }
    })
    this.targetId = 0
    this.targetName = 'clap'
    this.soundKeys = Object.keys(this.sounds._sprite)
    //keeps track of the sound 'id' returned from a playing howl
  }

  startTarget = name => {
    const sounds = this.sounds
    if (!sounds.playing(this.targetId)) {
      this.targetId = sounds.play(name)
      anime({
        targets: `.tt-target`,
        rotate: [{value: '1turn'}],
        loop: true,
        easing: 'linear',
        duration: 2500
      })
    } else {
      sounds.pause(this.targetId)
    }

    anime({
      targets: '.tt-target',
      rotate: [{value: '1turn'}],
      loop: true,
      easing: 'linear',
      duration: 2500
    })
  }

  handlePitch = evt => {
    const sounds = this.sounds
    this.setState({pitch: evt.target.value})
    const rate = Number(this.state.pitch)
    sounds.rate(rate, this.targetId)
  }

  handleVol = evt => {
    const sounds = this.sounds
    this.setState({vol: evt.target.value})
    const vol = Number(this.state.vol)
    //console.log('vol', vol)
    sounds.volume(vol, this.targetId)
  }

  changeSound = evt => {
    const sounds = this.sounds
    this.targetName = evt.target.value
    if (sounds.playing(this.targetId)) {
      sounds.pause(this.targetId)
      this.targetId = sounds.play(this.targetName)
    } else {
      this.targetId = this.startTarget(this.targetName)
    }
  }

  render() {
    return (
      <div className="channel-container">
        <div className="tt-target">
          <Turntable
            animClass=".tt-target"
            handleStart={() => {
              this.startTarget(this.targetName)
            }}
          />
        </div>
        <div className="faders-container">
          <div className="fader-with-label">
            <PitchFader
              name="target-pitch"
              value={this.state.pitch}
              onChange={this.handlePitch}
            />
            <div className="fader-label">pitch</div>
          </div>
          <div className="fader-with-label">
            <VolumeFader
              name="target-volume"
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

export default TargetChannel
