import React, {useRef, useEffect, useState} from 'react'
import anime from 'animejs'
import * as Tone from 'tone'

const PitchSlider = () => {
  const [pitch, setPitch] = useState(0)
  //const animationRef = useRef(null);
  const pitchRef = useRef(null)

  useEffect(() => {
    pitchRef.current = anime({
      targets: '.pitch-slider',
      translateX: 270,
      delay: function(el, i) {
        return i * 100
      },
      elasticity: 200,
      easing: 'easeInOutSine',
      autoplay: false
    })
  })
  // const pitchSlide = anime({
  //   targets: pitchRef.current,
  //   translateX: 270,
  //   delay: function(el, i) { return i * 100; },
  //   elasticity: 200,
  //   easing: 'easeInOutSine',
  //   autoplay: false
  // });

  // useEffect(() => {
  //   pitchSlide.seek(pitchSlide.duration * (pitchSlide.current / 100))
  // }, [pitch, pitchSlide])

  const handleDragStart = evt => {
    console.log('drag starting')
    pitchRef.current.seek(pitchRef.current.duration * (pitchRef.current / 100))
  }

  // const handleDragEnd = evt => {
  //   //event.preventDefault();
  //   console.log('drag ending');
  //   // setDragging(false);
  // }

  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        // onDragEnd={handleDragEnd}
        ref={pitchRef}
        className="pitch-slider"
      />
    </>
  )
}

export default PitchSlider

// useEffect(() => {
//   animationRef.current = anime({
//     targets: '.pitch-slider',
//     translateX: 270,
//     delay: function(el, i) { return i * 100; },
//     elasticity: 200,
//     easing: 'easeInOutSine',
//     autoplay: false
//   });
// })
