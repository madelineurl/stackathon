import React from 'react'
import {Link} from 'react-router-dom'
import {Turntable} from '../components'
//import ConfettiGenerator from "confetti-js"

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <Link to="/play">
          <Turntable />
        </Link>
      </div>
    </>
  )
}

export default Homepage
