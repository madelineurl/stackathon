import React from 'react'
import {Howl} from 'howler'
//import anime from 'animejs'
import {Channel} from '../components'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sourcePitch: 1.0,
      sourceVol: 0.5,
      targetPitch: 1.0,
      targetVol: 0.5,
      thirdPitch: 1.0,
      thirdVol: 0.5,
      thirdChannel: false,
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
    this.third = 0
  }

  addChannel = () => {
    this.setState({thirdChannel: true})
  }

  removeChannel = () => {
    this.setState({thirdChannel: false})
  }

  render() {
    return (
      <div className="center-game">
        <div className="game-container">
          <Channel
            tutorialMode={this.props.tutorialMode}
            soundKeys={this.soundKeys}
            sound="source"
            pitch={this.state.sourcePitch}
            vol={this.state.sourceVol}
            soundId={this.source}
            label="SOURCE"
            sounds={this.sounds}
          />
          <Channel
            tutorialMode={this.props.tutorialMode}
            soundKeys={this.soundKeys}
            sounds={this.sounds}
            soundId={this.target}
            pitch={this.state.targetPitch}
            vol={this.state.targetVol}
            sound="target"
            label="TARGET"
          />
          {this.state.thirdChannel ? (
            <Channel
              tutorialMode={this.props.tutorialMode}
              soundKeys={this.soundKeys}
              sounds={this.sounds}
              soundId={this.third}
              pitch={this.state.thirdPitch}
              vol={this.state.thirdVol}
              sound="targetTwo"
            />
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
