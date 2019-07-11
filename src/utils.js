export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const doNothing = () => {}

const duration = 1000

export const getAnimationDelayByIndex = (index, length) => `${index * (duration / length)}ms`

export const  getAnimatedLetterStyle = (letterIndex, animatedWordLength) => {
  const animationDelay = getAnimationDelayByIndex(letterIndex, animatedWordLength)
  return {
    animationDelay,
    animationDuration: `${duration}ms`
  }
}