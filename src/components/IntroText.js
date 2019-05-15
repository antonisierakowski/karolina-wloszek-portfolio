import React, { Fragment, useState } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function IntroText({ children }) {
  return (
    <p className="intro-text">

      {children[0].split(' ').map((word, i) => (
        <Fragment key={word + i}>
          <IntroWord word={word} />
          <span> </span>
        </Fragment>
      ))}
      <AniLink cover bg='pink' to='/projects/'>
        <IntroLetter char={children[1].props.children} />
      </AniLink>
    </p>

  );
}

function IntroWord({ word }) {
  return (
    <span style={{ display: 'inline-block' }}>
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