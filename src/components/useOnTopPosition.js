import { useState, useEffect } from 'react'
import { window, document } from 'browser-monads'

export default function useOnTopPosition() {
    const [ position, setPosition ] = useState(window.pageYOffset)

    useEffect(() => {
        const getPosition = () => {
            setPosition(window.pageYOffset)
        }
        document.addEventListener('scroll', getPosition)

        return () => {
            document.removeEventListener('scroll', getPosition)
        }
    }, [])

    return position === 0 ? true : false;
}
