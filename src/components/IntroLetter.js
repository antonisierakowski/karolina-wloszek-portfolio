import React, {useState } from 'react'

export default function IntroLetter({char}) {
  const [ hoverClass, setHoverClass ] = useState('single-letter')


  return (
    <span
      className={hoverClass}
      onMouseOver={() => setHoverClass('single-letter hovered')}
      onMouseLeave={() => setHoverClass('single-letter unhovered')}
    >
      { char }
    </span>
  )
}

