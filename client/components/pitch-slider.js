import React, {useRef, useEffect, useState} from 'react'
import anime from 'animejs'
import * as Tone from 'tone'

class PitchSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange = evt => {
    this.setState({value: evt.target.value})
    //console.log(this.state.value)
  }

  render() {
    return (
      <div className="pitch-slider-wrapper">
        <input
          name="pitch-slider"
          type="range"
          step=".001"
          className="pitch-slider"
          min="-8"
          max="8"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {/* <output htmlFor='pitch-slider' value={this.state.value} /> */}
      </div>
    )
  }
}

export default PitchSlider

// const PitchSlider = () => {
//   const [pitch, setPitch] = useState(0)
//   //const animationRef = useRef(null);
//   const pitchRef = useRef(null)

//   useEffect(() => {
//     pitchRef.current = anime({
//       targets: '.pitch-slider',
//       translateX: 270,
//       delay: function(el, i) {
//         return i * 100
//       },
//       elasticity: 200,
//       easing: 'easeInOutSine',
//       autoplay: false
//     })
//   })
//   // const pitchSlide = anime({
//   //   targets: pitchRef.current,
//   //   translateX: 270,
//   //   delay: function(el, i) { return i * 100; },
//   //   elasticity: 200,
//   //   easing: 'easeInOutSine',
//   //   autoplay: false
//   // });

//   // useEffect(() => {
//   //   pitchSlide.seek(pitchSlide.duration * (pitchSlide.current / 100))
//   // }, [pitch, pitchSlide])
