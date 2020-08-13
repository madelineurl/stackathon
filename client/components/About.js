import React from 'react'
import {Link} from 'react-router-dom'

export const About = () => {
  return (
    <>
      <div id="about">
        <div>
          Important information about the important skill of beatmatching.
        </div>
        <Link to="/">Back to the main page</Link>
      </div>
    </>
  )
}

export default About
