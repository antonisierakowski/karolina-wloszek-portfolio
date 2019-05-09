import React from 'react';
import IntroLetter from './IntroLetter'

export default function IntroWord({ word }) {
    return (
      <span style={{ display: 'inline-block' }}>
        {word.split('').map((letter, letterIndex) => (
          <IntroLetter index={letterIndex} char={letter} />
        ))}
      </span>
    );
}