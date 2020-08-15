import React from 'react'
import {Game} from '../components'

const TutorialGame = () => {
  return (
    <>
      <div className="hint">
        <p>Click the blue square to start the source pattern</p>
        <p>Click the purple square to start the target pattern</p>
      </div>
      <Game />
      <div className="hint">
        <span>
          Drag along the pitch slider to adjust the speed of either loop. Like a
          turntable pitch fader, the pitch increases as it moves towards you,
          and decreases as it moves away from you.
        </span>
      </div>
    </>
  )
}

export default TutorialGame
