import { useState, useEffect } from 'react'
import { document, window } from 'browser-monads'

export default function useCursorScreenHalf() {
    const [ cursorScreenHalf, setCursorScreenHalf ] = useState(null)
    
    useEffect(() => {

        function checkScreenHalf(event) {
            const mousePosition = event.clientX;
            const width = window.innerWidth;
            setCursorScreenHalf(mousePosition > width/2 ? 'right' : 'left')
        }

        document.addEventListener('mousemove', event => checkScreenHalf(event))

        return () => document.removeEventListener('mousemove', event => checkScreenHalf(event))

    }, [])

    return cursorScreenHalf;
}
