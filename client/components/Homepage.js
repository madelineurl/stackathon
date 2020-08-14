import React, {useState} from 'react'
import {Game} from '../components'
//import ConfettiGenerator from "confetti-js"

class Homepage extends React.Component {
  render() {
    return (
      <>
        <div className="hint">
          <p>Click the blue square to hear the source pattern</p>
          <p>Click the purple square to start the target pattern</p>
        </div>
        <Game />
        <span className="hint">
          Drag along the pitch slider to adjust the speed of either loop. Like
          on a turntable, the pitch increases as it moves towards you, and
          decreases as it moves away from you.
        </span>
      </>
    )
  }
}

export default Homepage
