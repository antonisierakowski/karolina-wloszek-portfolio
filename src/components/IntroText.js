import React, { Fragment } from 'react'
import IntroWord from './IntroWord'

export default function IntroText({ children }) {
    return (
      <div>
        <p className="intro-text">
            {children.split(' ').map((word, i) => (
                <Fragment key={word + i}>
                    <IntroWord word={word} />
                    <span> </span>
                </Fragment>
            ))}
        </p>
      </div>
    );
  }