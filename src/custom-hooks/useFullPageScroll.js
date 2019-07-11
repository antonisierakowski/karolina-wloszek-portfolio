import { useEffect, useState } from 'react'
import Hamster from "hamsterjs"
import { doNothing, throttle } from "../utils"

const scrollToSecondPage = () => {
  const pageHeight = window.innerHeight
  window.scrollTo({
    top: pageHeight,
    left: 0,
    behavior: 'smooth',
  })
}

const scrollToFirstPage = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

export function useFullPageScroll() {
  const [isOnBottomPage, onSetIsOnBottomPage] = useState(false)

  useEffect(() => {
    const hamster = Hamster(document.getElementById('index-page'))

    hamster.wheel((event, delta, deltaX, deltaY) => {
      event.preventDefault()
      if (isOnBottomPage) {
        onSetIsOnBottomPage(false)
        scrollToFirstPage()
      } else {
        scrollToSecondPage()
        onSetIsOnBottomPage(true)
      }
    })

    return () => {
      hamster.unwheel()
    }
  }, [isOnBottomPage])
}