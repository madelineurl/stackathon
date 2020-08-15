import React from 'react'

const PitchFader = props => {
  return (
    <div className="pitch-slider-wrapper">
      <input
        name={props.name}
        list="source-pitch-tick"
        type="range"
        step=".001"
        className="pitch-slider"
        min="0.9"
        max="1.1"
        value={props.value}
        onChange={props.onChange}
      />
      <datalist id="source-pitch-tick">
        <option value="-8" />
        <option value="0" />
        <option value="+8" />
        <option>75</option>
        <option>100</option>
      </datalist>
    </div>
  )
}

export default PitchFader
