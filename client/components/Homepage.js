import React from 'react'
import {Game} from '../components'
//import ConfettiGenerator from "confetti-js"

const Homepage = () => {
  return (
    <>
      <div className="hint">
        <p>SOURCE</p>
        <p>TARGET</p>
      </div>
      <Game />
      <div className="hint" />
    </>
  )
}

export default Homepage
