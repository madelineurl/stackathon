import React, {useRef} from 'react'
import anime from 'animejs/lib/anime.es.js'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  const animationRef = useRef(null)
  React.useEffect(() => {
    animationRef.current = anime({
      targets: '.el',
      translateX: 250,
      delay: function(el, i) {
        return i * 100
      },
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    })
  }, [])

  return (
    <>
      <div>
        <Navbar />
        <Routes />
      </div>
      <div className="App">
        <button type="button" onClick={() => animationRef.current.restart()}>
          Restart
        </button>
        <div className="el" />
      </div>
    </>
  )
}

export default App
