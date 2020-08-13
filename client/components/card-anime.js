import React from 'react'
import Anime from 'react-anime'

const CardAnime = props => {
  const transition = {
    opacity: [0, 1],
    translateY: ['100vh', 0]
  }
  return <Anime {...transition} {...props} />
}

export default CardAnime
