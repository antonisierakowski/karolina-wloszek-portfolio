import React from 'react';
import IntroLetter from './IntroLetter'

export default function IntroWord({ word }) {
    return (
      <span style={{ display: 'inline-block' }}>
        {word.split('').map((letter, i) => (
          <IntroLetter key={letter + i} char={letter} />
        ))}
      </span>
    );
}