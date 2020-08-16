import React from 'react'
import {Howl} from 'howler'
import anime from 'animejs'
import {Turntable, PitchFader, VolumeFader} from '../components'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sourcePitch: 1.0,
      sourceVol: 0.5,
      targetPitch: 1.0,
      targetVol: 0.5,
      targetTwoPitch: 1.0,
      targetTwoVol: 0.5,
      addChannel: false,
      tutorialMode: this.props.tutorialMode
    }
    this.sounds = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      loop: true,
      volume: 0.5,
      sprite: {
        source: [0, 109714.28571428571],
        target: [111000, 63529.43310657596],
        targetTwo: [176000, 54857.14285714286]
      }
    })
    this.soundKeys = Object.keys(this.sounds._sprite)
    this.source = 0
    this.target = 0
    this.targetTwo = 0
  }

  startSource = () => {
    const sounds = this.sounds
    if (!sounds.playing(this.source)) {
      this.source = sounds.play('source')
      //source is being reassigned a NEW audio id for the source each time
      //this is why pressing play again starts it from the beginning
      //ideal for this purpose, but creates difficulty for changing source
    } else {
      sounds.pause(this.source)
    }

    anime({
      targets: '.tt-source',
      rotate: [{value: '1turn'}],
      loop: true,
      easing: 'linear',
      duration: 2500
    })
  }

  startTarget = () => {
    const sounds = this.sounds
    if (!sounds.playing(this.target)) {
      this.target = sounds.play('target')
    } else {
      sounds.pause(this.target)
    }

    anime({
      targets: '.tt-target',
      rotate: [{value: '1turn'}],
      loop: true,
      easing: 'linear',
      duration: 2500
    })
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

  addChannel = () => {
    this.setState({addChannel: true})
  }

  startTargetTwo = () => {
    const sounds = this.sounds
    if (!sounds.playing(this.targetTwo)) {
      this.targetTwo = sounds.play('targetTwo')
    } else {
      sounds.pause(this.targetTwo)
    }

    anime({
      targets: '.tt-target-two',
      rotate: [{value: '1turn'}],
      loop: true,
      easing: 'linear',
      duration: 2500
    })
  }

  handleTargetTwoPitch = evt => {
    this.setState({targetTwoPitch: evt.target.value})
    const rate = Number(this.state.targetTwoPitch)
    //console.log('target pitch val', rate)
    this.sounds.rate(rate, this.targetTwo)
  }

  handleTargetTwoVol = evt => {
    this.setState({targetTwoVol: evt.target.value})
    const vol = Number(this.state.targetTwoVol)
    //console.log('target vol', vol);
    this.sounds.volume(vol, this.targetTwo)
  }

  changeSource = evt => {
    const sounds = this.sounds
    if (sounds.playing(this.source)) {
      sounds.pause(this.source)
      this.source = sounds.play(evt.target.value)
    } else {
      // this.source = sounds._sprite[evt.target.value];
      // console.log(this.source);
      this.source = sounds.play(evt.target.value)
    }
  }

  changeTarget = evt => {
    const sounds = this.sounds
    if (sounds.playing(this.target)) {
      sounds.pause(this.target)
      this.target = sounds.play(evt.target.value)
    } else {
      // this.source = sounds._sprite[evt.target.value];
      // console.log(this.source);
      this.target = sounds.play(evt.target.value)
    }
  }

  changeThird = evt => {
    const sounds = this.sounds
    if (sounds.playing(this.targetTwo)) {
      sounds.pause(this.targetTwo)
      this.targetTwo = sounds.play(evt.target.value)
    } else {
      // this.source = sounds._sprite[evt.target.value];
      // console.log(this.source);
      this.targetTwo = sounds.play(evt.target.value)
    }
  }

  render() {
    return (
      <div className="center-game">
        <div className="game-container">
          <div className="channel-container">
            <div className="tt-source">
              <Turntable
                animClass=".tt-source"
                handleStart={this.startSource}
              />
            </div>
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
            {this.state.tutorialMode ? (
              <div className="channel-label-container">
                <h3>SOURCE</h3>
              </div>
            ) : (
              <select
                className="change-sound"
                //value={this.state.value}
                onChange={this.changeSource}
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
          <div className="channel-container">
            <div className="tt-target">
              <Turntable
                animClass=".tt-target"
                handleStart={this.startTarget}
              />
            </div>
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
            {this.state.tutorialMode ? (
              <div className="channel-label-container">
                <h3>TARGET</h3>
              </div>
            ) : (
              <select
                className="change-sound"
                //value={this.state.value}
                onChange={this.changeTarget}
              >
                <option>choose sound</option>
                {this.soundKeys.map((name, index) => (
                  <option key={index} className="target-options" value={name}>
                    {name}
                  </option>
                ))}
              </select>
            )}
          </div>
          {this.state.addChannel ? (
            <div className="channel-container">
              <div className="tt-target-two">
                <Turntable
                  animClass=".tt-target-two"
                  handleStart={this.startTargetTwo}
                />
              </div>
              <div className="faders-container">
                <div className="fader-with-label">
                  <PitchFader
                    name="target-two-pitch"
                    value={this.state.targetTwoPitch}
                    onChange={this.handleTargetTwoPitch}
                  />
                  <div className="fader-label">pitch</div>
                </div>
                <div className="fader-with-label">
                  <VolumeFader
                    name="target-two-volume"
                    value={this.state.targetTwoVol}
                    onChange={this.handleTargetTwoVol}
                  />
                  <div className="fader-label">vol.</div>
                </div>
              </div>
              <select
                className="change-sound"
                //value={this.state.value}
                onChange={this.changeThird}
              >
                <option>choose sound</option>
                {this.soundKeys.map((name, index) => (
                  <option
                    key={index}
                    className="target-two-options"
                    value={name}
                  >
                    {name}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
        {this.state.tutorialMode ? null : (
          <div className="add-channel" onClick={this.addChannel}>
            add channel
          </div>
        )}
      </div>
    )
  }
}

export default Game
