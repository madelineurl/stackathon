import React from 'react'
import {Game} from '../components'

const TutorialMode = () => {
  return (
    <>
      <div className="hint-top">
        <p>Click the source record to start the source pattern</p>
        <p>Click the target record to start the target pattern</p>
      </div>
      <Game tutorialMode={true} />
      <div className="hint-bottom">
        <span>
          Drag along the pitch slider to adjust the speed of either loop--Try to
          match the target with the laser sound in the source.{' '}
        </span>
        <span>
          Like a turntable pitch fader, the pitch increases as it moves towards
          you, and decreases as it moves away from you.
        </span>
      </div>
    </>
  )
}

export default TutorialMode
