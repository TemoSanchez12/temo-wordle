import React, { useState } from 'react'

type ScoreContextTypes = {
  score: { games: number; victories: number }
  setScore: React.Dispatch<
    React.SetStateAction<{ games: number; victories: number }>
  >
}

const ScoreContext = React.createContext<ScoreContextTypes>({
  score: { games: 0, victories: 0 },
  setScore: () => {},
})

type ScoreContextProviderProps = {
  children: JSX.Element
}

export const ScoreContextProvider = ({
  children,
}: ScoreContextProviderProps) => {
  const [score, setScore] = useState({
    games: 0,
    victories: 0,
  })

  const scoreProviderValue = {
    score,
    setScore,
  }

  return (
    <ScoreContext.Provider value={scoreProviderValue}>
      {children}
    </ScoreContext.Provider>
  )
}

export default ScoreContext
