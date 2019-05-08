import React from 'react'
import IntroLetter from './IntroLetter'

export default function IntroText({children}) {
    
    const letters = children.split('').map(e => <IntroLetter char={e}/>)

    return (
    <div>
        <p className='intro-text'>
            {letters}
        </p>
    </div>
  )
}
