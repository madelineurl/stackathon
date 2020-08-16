import React from 'react'
import anime from 'animejs'

class Turntable extends React.Component {
  componentDidMount() {
    anime({
      targets: this.props.animClass,
      delay: (el, index) => index * 50,
      duration: 1500,
      direction: 'normal',
      easing: 'easeInSine',
      scale: [0.9, 1.2]
    })
  }

  render() {
    return (
      <>
        <div className="tt-vinyl" onClick={this.props.handleStart}>
          <div className="tt-wheel" />
          <div className="tt-middle-wheel" />
          <div className="tt-center-wheel" />
          <div className="tt-cover">
            <div className="tt-label">
              <div className="tt-spindle" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Turntable
