import React, { useState } from 'react'

type UserAnswerContextTypes = {
  userAnswer: string[]
  setUserAnswer: React.Dispatch<React.SetStateAction<string[]>>
}

const UserAnswerContext = React.createContext<UserAnswerContextTypes>({
  userAnswer: [],
  setUserAnswer: () => {},
})

type UserAnswerContextProviderProps = {
  children: JSX.Element
}

export const UserAnswerContextProvider = ({
  children,
}: UserAnswerContextProviderProps) => {
  const [userAnswer, setUserAnswer] = useState<string[]>([])

  const userAnswerProviderValue = {
    userAnswer,
    setUserAnswer,
  }

  return (
    <UserAnswerContext.Provider value={userAnswerProviderValue}>
      {children}
    </UserAnswerContext.Provider>
  )
}

export default UserAnswerContext
