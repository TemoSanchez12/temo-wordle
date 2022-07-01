import React, { useState } from 'react'

type AttemptContextTypes = {
  attempt: number
  setAttempt: React.Dispatch<React.SetStateAction<number>>
}

const AttemptContext = React.createContext<AttemptContextTypes>({
  attempt: 0,
  setAttempt: () => {},
})

type AttemptContextProviderProps = {
  children: JSX.Element
}

export const AttemptContextProvider = ({
  children,
}: AttemptContextProviderProps) => {
  const [attempt, setAttempt] = useState<number>(1)

  const attemptProviderValue = {
    attempt,
    setAttempt,
  }

  return (
    <AttemptContext.Provider value={attemptProviderValue}>
      {children}
    </AttemptContext.Provider>
  )
}

export default AttemptContext
