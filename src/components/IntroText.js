import React, { Fragment, useState } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function IntroText({ children, city }) {

  return (
    <p className="intro-text">
      {/* początek tekstu */}
      {children[0].split(' ').map((word, i) => (
        <Fragment key={word + i}>
          <IntroWord word={word} />
          <span> </span>
        </Fragment>
      ))}
      {/* wrocław */}
      {children[2].split(' ').map((word, i) => (
        <Fragment key={word + i}>
          <IntroWord word={word} />
        </Fragment>
      ))}
      {/* kropeczka */}
      <IntroWord word={'.'} />
      {/* line break */}
      <br/>
      {/* link */}
      <AniLink cover bg='pink' to='/projects/'>
        <IntroLetter char={children[5]} />
      </AniLink>
    </p>

  );
}

function IntroWord({ word, classNm }) {
  return (
    <span style={{ display: 'inline-block' }} className={classNm ? classNm : null}>
      {word.split('').map((letter, i) => (
        <IntroLetter key={letter + i} char={letter} />
      ))}
    </span>
  );
}

function IntroLetter({char}) {
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