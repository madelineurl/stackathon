import React from 'react'
import {Howl} from 'howler'
import anime from 'animejs'
import {Turntable, PitchFader, VolumeFader} from '../components'

class ThirdChannel extends React.Component {
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
    this.soundId = 0
    this.soundName = 'fast-hats'
    this.soundKeys = Object.keys(this.sounds._sprite)
    //keeps track of the sound 'id' returned from a playing howl
  }

  startSound = name => {
    const sounds = this.sounds
    if (!sounds.playing(this.soundId)) {
      this.soundId = sounds.play(name)
      anime({
        targets: '.tt-target-two',
        rotate: [{value: '1turn'}],
        loop: true,
        easing: 'linear',
        duration: 2500
      })
    } else {
      sounds.pause(this.soundId)
    }
  }

  handlePitch = evt => {
    const sounds = this.sounds
    this.setState({pitch: evt.target.value})
    const rate = Number(this.state.pitch)
    //console.log('rate', rate)
    sounds.rate(rate, this.soundId)
  }

  handleVol = evt => {
    const sounds = this.sounds
    this.setState({vol: evt.target.value})
    const vol = Number(this.state.vol)
    //console.log('vol', vol)
    sounds.volume(vol, this.soundId)
  }

  changeSound = evt => {
    const sounds = this.sounds
    this.soundName = evt.target.value

    if (sounds.playing(this.soundId)) {
      sounds.pause(this.soundId)
      this.soundId = sounds.play(this.soundName)
    } else {
      this.soundId = this.startSound(this.soundName)
    }
  }

  render() {
    return (
      <div className="channel-container">
        <div className="tt-target-two">
          <Turntable
            animClass=".tt-target-two"
            handleStart={() => {
              this.startSound(this.soundName)
            }}
          />
        </div>
        <div className="faders-container">
          <div className="fader-with-label">
            <PitchFader
              name="target-two-pitch"
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
        {this.props.tutorialMode ? null : (
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

export default ThirdChannel
