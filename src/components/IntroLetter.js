import React, {useState} from 'react'

export default function IntroLetter({char}) {
  const [ isHovered, setIsHovered ] = useState(false);



  if (char === ' ') {
    return <span> </span>
  } else {
    return (
      <span
        className={isHovered ? 'single-letter hovered' : 'single-letter'}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        { char }
      </span>
    )
  }
}
