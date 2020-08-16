import React from 'react'
//import anime from 'animejs'
import {SourceChannel, TargetChannel} from '../components'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thirdChannel: false,
      tutorialMode: this.props.tutorialMode
    }
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
          {/* {
          this.state.thirdChannel ? (
            <SourceChannel
            tutorialMode={this.props.tutorialMode}
          />
          ) : null } */}
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

export default NewGame
