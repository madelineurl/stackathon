import React from 'react'
import {Homepage} from '../components'

const Tutorial = props => {
  return (
    <>
      <div>
        When you first start out, it can feel impossible to even tell the
        difference between the two source sounds.
      </div>
      <div>
        That's ok! All it takes is developing a practice. But here are a few
        tips to get you started...
      </div>
      <ul>
        <li>
          Matching mid-range frequencies like claps and snares tends to be
          easier than matching low (kicks and basslines) or high (high hats,
          cymbals) frequencies.
        </li>
        <li>
          Over-compensate when moving the slider--if the source feels
          significantly faster, increase the target speed until it sounds more
          in-time, then immediately slow it down a bit. Why? Whenever you're
          'catching up', you have to go beyond the tempo you're trying to match
        </li>
        <li>
          Keep your hands off the platter! But the beauty of this app is that
          you can't put them on the platter even if you wanted to. The pitch
          fader is your best friend. It's a common bad habit to make small
          adjustments to the turntable platter by dragging your fingers to slow
          down the target, or turning the center spindle to speed it up. While
          these can be useful for last-minute minute changes, they're only
          temporary, so the target will always slip out of time again. It's also
          easy to accidentally make too big of an adjustment and throw your
          whole match out of sync.
        </li>
      </ul>
    </>
  )
}

export default Tutorial
