import React, { useEffect, useContext } from 'react'
import DigitalKeyboard from './DigitalKeyboard'

import GameBoard from './GameBoard'
import Header from './Header'

import UserAnswerContext from '../store/userAnswer'
import AttemptContext from '../store/attempt'
import ScoreContext from '../store/score'
import WordsContext from '../store/words'

import Spinner from './Spinner'

type GameProps = {
  setIsStatsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setInstructionsOpen: React.Dispatch<React.SetStateAction<boolean>>
  timer: { time: string; reset: () => void }
}

const Game = ({ setIsStatsOpen, setInstructionsOpen, timer }: GameProps) => {
  const userAnswerContext = useContext(UserAnswerContext)
  const attemptContext = useContext(AttemptContext)
  const scoreContext = useContext(ScoreContext)
  const wordsContext = useContext(WordsContext)

  const endGame = (won = false) => {
    scoreContext.setScore((prev) => {
      const newScore = Object.assign({}, prev)
      if (won) {
        newScore.victories++
      }
      newScore.games++
      return newScore
    })
    userAnswerContext.setUserAnswer([])
    attemptContext.setAttempt(1)
    setIsStatsOpen(true)
    timer.reset()
    wordsContext.setNewCorrectAnswer()
  }

  useEffect(() => {
    if (timer.time === '00:00') {
      wordsContext.setNewCorrectAnswer()
      timer.reset()
      endGame()
    }
  }, [timer])

  // Manejamos las partidas
  useEffect(() => {
    if (
      userAnswerContext.userAnswer[attemptContext.attempt - 1] &&
      userAnswerContext.userAnswer[attemptContext.attempt - 1].length >= 5 &&
      userAnswerContext.userAnswer[attemptContext.attempt - 1] ===
        wordsContext.correctAnswer
    ) {
      endGame(true)
    } else if (
      userAnswerContext.userAnswer[attemptContext.attempt - 1] &&
      userAnswerContext.userAnswer[attemptContext.attempt - 1].length >= 5 &&
      attemptContext.attempt >= 5
    ) {
      endGame()
    } else if (
      userAnswerContext.userAnswer[attemptContext.attempt - 1] &&
      userAnswerContext.userAnswer[attemptContext.attempt - 1].length >= 5
    ) {
      attemptContext.setAttempt((prev) => prev + 1)
    }
  }, [userAnswerContext.userAnswer])

  console.log(wordsContext.correctAnswer)

  return (
    <main className='w-game-container mx-auto  h-full '>
      <Header
        setIsStatsOpen={setIsStatsOpen}
        setInstructionsOpen={setInstructionsOpen}
      />
      {wordsContext.isLoading ? (
        <div className='mx-auto mt-24 flex justify-center items-center flex-col'>
          <p className='text-3xl text-indigo-400 mb-8 '>Cargando palabras...</p>
          <Spinner />
        </div>
      ) : (
        <GameBoard />
      )}
      <DigitalKeyboard />
    </main>
  )
}

export default Game
