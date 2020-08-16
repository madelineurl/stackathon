import React from 'react'
import {Link} from 'react-router-dom'

const Tutorial = () => {
  return (
    <div className="tutorial-info">
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
        <li>
          The longer it takes for the target to go out of sync, the closer you
          are to the correct match. Two sounds whose tempos vary by 1bpm might
          take 4 bars to go out of sync, whereas two sounds whose tempos vary by
          0.1bpm might
        </li>
        <li>
          So-called straight-ahead, or four-on-the-floor, beats in 4/4 time are
          easier to match. So are machine-programmed or produced rhythms. It's
          far more difficult trying to match unusual time signatures, rhythms
          with uneven attack times or 'swung' rhythms, or recordings of live
          musicians.
        </li>
        <li>
          Have fun! Imperfection is part of the beauty of beatmatching. It adds
          a humanizing element to DJ sets--much like swing humanizes stale
          beats--and helps us learn to appreciate mistakes. Plus, it's that much
          more impressive to hear a mistake corrected.
        </li>
        <li>
          WHEN you bring in the target sound is just as important as lining up
          the tempos. In order to sound seamless, the target has to trigger on a
          beat that makes sense for the structure of the source. This is called
          'mixing by measure'.{' '}
        </li>
      </ul>
      <Link to="/tutorial/game">Next page for demo</Link>
    </div>
  )
}

export default Tutorial
