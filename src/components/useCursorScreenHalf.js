import { useState, useEffect } from 'react'
import { document, window } from 'browser-monads'

export default function useCursorScreenHalf() {
    const [ cursorScreenHalf, setCursorScreenHalf ] = useState('right')
    
    useEffect(() => {

        function checkScreenHalf(event) {
            const mousePosition = event.clientX;
            const width = window.innerWidth;
            setCursorScreenHalf(mousePosition > width/2 ? 'right' : 'left')
        }

        document.addEventListener('mousemove', checkScreenHalf)

        return () => {
            document.removeEventListener('mousemove', checkScreenHalf)
        }

    }, [])

    return cursorScreenHalf;
}
