import React, { Fragment, useState } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Scramble from 'react-scramble'

export default function IntroText({ children }) {
  const scrambledCity = (
    <Scramble 
      autoStart
      text="Wrocław"
      speed='slow'
      steps={[
        {
          roll: 5,
          action: '+',
        },
        {
          roll: 20,
          action: '-',
          type: 'forward',
        },
      ]}
    />
  )
  return (
    <p className="intro-text">
      {/* początek tekstu */}
      {children[0].split(' ').map((word, i) => (
        <Fragment key={word + i}>
          <IntroWord word={word} />
          <span> </span>
        </Fragment>
      ))}
      {/* wrocław z efektem */}
      <IntroLetter char={scrambledCity} classNm='city-name'/>
      {/* kropeczka */}
      {children[2].split(' ').map((word, i) => (
        <Fragment key={word + i}>
          <IntroWord word={word} />
          <span> </span>
        </Fragment>
      ))}
      {/* line break */}
      <br/>
      {/* reszta tekstu */}
      {children[4].split(' ').map((word, i) => (
        <Fragment key={word + i}>
          <IntroWord word={word} />
          <span> </span>
        </Fragment>
      ))}
      {/* link */}
      <AniLink cover bg='pink' to='/projects/'>
        <IntroLetter char={children[5].props.children} />
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