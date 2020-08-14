import React from 'react'
//import anime from 'animejs'
//import * as Tone from 'tone'

class PitchSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange = evt => {
    const audio = this.props.audio
    this.setState({value: evt.target.value})

    const num = Number(this.state.value)

    console.log(Number(this.state.value))

    const target = audio._sprite.target
    audio.rate(num, target)
  }

  render() {
    return (
      <div className="pitch-slider-wrapper">
        <input
          name="pitch-slider"
          type="range"
          step=".1"
          className="pitch-slider"
          min="-8"
          max="8"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default PitchSlider
