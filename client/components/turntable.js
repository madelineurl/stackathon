import React from 'react'
import anime from 'animejs'

class Turntable extends React.Component {
  componentDidMount() {
    anime({
      targets: '.tt-vinyl',
      rotate: {
        value: 360,
        loop: true
      },
      delay: (el, index) => index * 50,
      duration: 2000,
      // direction: 'normal',
      easing: 'easeInSine'
    })
  }

  render() {
    return (
      <>
        <div className="tt">
          <div className="tt-vinyl" onClick={this.props.handleStart}>
            <div className="tt-wheel" />
            <div className="tt-inner-wheel" />
            <div className="tt-cover">
              <div className="tt-label">
                <div className="tt-spindle" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Turntable
