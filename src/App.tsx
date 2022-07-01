import { useState, useEffect, useContext } from 'react'

import useTimer from './hooks/useTimer'

import Instructions from './components/Instructions'
import Game from './components/Game'
import Stats from './components/Stats'

import ScoreContext from './store/score'

function App() {
  const timer = useTimer(300)

  const [isStatsOpen, setIsStatsOpen] = useState(false)
  const [isInstructionsOpen, setInstructionsOpen] = useState(true)

  const scoreContext = useContext(ScoreContext)

  useEffect(() => {
    const aux = window.localStorage.getItem('notFirstTime')

    if (aux) {
      const games = window.localStorage.getItem('games') || 0
      const victories = window.localStorage.getItem('games') || 0

      scoreContext.setScore({
        games: +games,
        victories: +victories,
      })
      setInstructionsOpen(false)
    } else {
      window.localStorage.setItem('notFirstTime', 'true')
      setInstructionsOpen(true)
    }
  }, [])

  return (
    <>
      <span className='absolute top-2 right-2'>{timer.time}</span>
      {isInstructionsOpen && (
        <Instructions setInstructionsOpen={setInstructionsOpen} />
      )}

      <Game
        timer={timer}
        setIsStatsOpen={setIsStatsOpen}
        setInstructionsOpen={setInstructionsOpen}
      />

      {isStatsOpen && (
        <Stats timer={timer.time} setIsStatsOpen={setIsStatsOpen} />
      )}
    </>
  )
}

export default App
