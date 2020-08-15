import React from 'react'
import {Game} from '../components'
//import ConfettiGenerator from "confetti-js"

const Homepage = () => {
  return (
    <>
      <Game />
      <div className="channel-label-container">
        <h3>SOURCE</h3>
        <h3>TARGET</h3>
      </div>
      <div className="hint" />
    </>
  )
}

export default Homepage
