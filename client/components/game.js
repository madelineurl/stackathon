import React from 'react'
import anime from 'animejs'
import {SourceChannel, TargetChannel, ThirdChannel} from '../components'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thirdChannel: false,
      tutorialMode: this.props.tutorialMode
    }
  }

  componentDidMount() {
    anime({
      targets: '.game-container',
      opacity: [0, 1],
      //translateY: ['100vh', 0],
      easing: 'easeInSine',
      duration: 1200
    })
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
          <SourceChannel
            tutorialMode={this.props.tutorialMode}
            label="SOURCE"
          />
          <TargetChannel
            tutorialMode={this.props.tutorialMode}
            label="TARGET"
          />
          {this.state.thirdChannel ? (
            <ThirdChannel tutorialMode={this.props.tutorialMode} />
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
