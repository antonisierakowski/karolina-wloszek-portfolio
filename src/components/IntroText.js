import React, { Fragment } from 'react'
import IntroWord from './IntroWord'

export default function IntroText({ children }) {
    return (
      <div>
        <p className="intro-text">
            {children.split(' ').map((word, wordIndex) => (
                <Fragment>
                    <IntroWord key={wordIndex} word={word} />
                    <span> </span>
                </Fragment>
            ))}
        </p>
      </div>
    );
  }