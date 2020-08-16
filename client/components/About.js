import React from 'react'
import {Link} from 'react-router-dom'

export const About = () => {
  return (
    <>
      <div id="about">
        <div>
          <h3>
            Beatmatching is the practice of dynamically adjusting the tempo of
            two or more source sounds until their tempos align precisely.
          </h3>
        </div>
        <div>
          On a deeper level, it's one of many ways of playing a rather
          unconvential instrument--the turntable. The practice of beatmatching
          is a back-and-forth conversation between you and your turntable(s)
          that connects you to your music in a unique way.
        </div>
        <div>
          But relying on your ears can be frustrating, and modern tools make it
          easy to develop a DJ practice using only visual cues like waveforms.
          It's very difficult to train your ears when most modern equipment
          provides you with BPM numbers on a screen, and turntables (or other
          equipment to practice on) tend to be expensive and inaccessible.
        </div>
        <div>
          Enter Shiftpitch! A lot of apps teach you how to DJ, but few help you
          hone the skill of beatmatching using just your ears. Practicing
          beatmatching improves your rhythm by training your ears to be
          sensitive to minute changes in tempo. The precision required to match
          two beats exactly demands close attention that can lead to a creative
          'flow-state' which is both meditative and fun. Convinced yet? Get
          matching!
        </div>
        <div>
          <Link to="/play">Back to the main page</Link>
        </div>
      </div>
    </>
  )
}

export default About
