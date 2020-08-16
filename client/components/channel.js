import React from 'react'
import {Turntable, PitchFader, VolumeFader} from '../components'
import anime from 'animejs'

class BaseChannel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pitch: this.props.pitch,
      vol: this.props.vol
    }
    this.sourceId = this.props.sourceId
    //keeps track of the sound 'id' returned from a playing howl
  }

  startSource = () => {
    const sounds = this.props.sounds
    if (!sounds.playing(this.sourceId)) {
      this.source = sounds.play(this.props.sound)
      console.log(this.source)
    } else {
      sounds.pause(this.source)
    }

    anime({
      targets: `.tt-${this.props.sound}`,
      rotate: [{value: '1turn'}],
      loop: true,
      easing: 'linear',
      duration: 2500
    })
  }

  handlePitch = evt => {
    const sounds = this.props.sounds
    this.setState({pitch: evt.target.value})
    const rate = Number(this.state.pitch)
    console.log('rate', rate)
    sounds.rate(rate, this.sourceId)
    //console.log(sounds.rate(this.sourceId))
  }

  handleVol = evt => {
    const sounds = this.props.sounds
    this.setState({vol: evt.target.value})
    const vol = Number(this.state.vol)
    console.log('vol', vol)
    sounds.volume(vol, this.sourceId)
  }

  changeSound = evt => {
    const sounds = this.props.sounds
    if (sounds.playing(this.source)) {
      sounds.pause(this.source)
      this.source = sounds.play(evt.target.value)
    } else {
      // this.source = sounds._sprite[evt.target.value];
      // console.log(this.source);
      this.source = sounds.play(evt.target.value)
    }
  }

  render() {
    return (
      <div className="channel-container">
        <div className={`tt-${this.props.sound}`}>
          <Turntable handleStart={this.startSource} />
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
            onChange={this.changeSound}
          >
            <option>choose sound</option>
            {this.props.soundKeys.map((name, index) => (
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

export default BaseChannel
