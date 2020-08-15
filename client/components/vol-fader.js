import React from 'react'

const VolumeFader = props => {
  return (
    <div className="pitch-slider-wrapper">
      <input
        name={props.name}
        type="range"
        step=".01"
        className="pitch-slider"
        min="0.0"
        max="1.0"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default VolumeFader
