import { useState, useEffect } from 'react'

const useTimer = (time: number) => {
  const [timeLeft, setTimeLeft] = useState(time)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((time) => time - 1)
    }, 1000)

    return () => clearTimeout(timer)
  })

  const min = Math.floor(timeLeft / 60)
  const sec = timeLeft - Math.floor(timeLeft / 60) * 60

  return {
    time: `${min.toString().length === 1 ? '0' + min.toString() : min}:${
      sec.toString().length === 1 ? '0' + sec.toString() : sec
    }`,
    reset: () => {
      setTimeLeft(time)
    },
  }
}

export default useTimer
