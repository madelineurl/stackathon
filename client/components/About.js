import React from 'react'
import {Link} from 'react-router-dom'

export const About = () => {
  return (
    <>
      <div id="about">
        <div>
          Important information about the fun and skill of beatmatching.
        </div>
        <Link to="/">Back to the main page</Link>
      </div>
    </>
  )
}

export default About
