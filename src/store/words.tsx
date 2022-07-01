import React, { Children, useEffect, useState } from 'react'

type WordsContextTypes = {
  correctAnswer: string
  isLoading: boolean
  setNewCorrectAnswer: () => void
}

const WordsContext = React.createContext<WordsContextTypes>({
  correctAnswer: '',
  isLoading: true,
  setNewCorrectAnswer: () => {},
})

type WordsContextProviderProps = {
  children: JSX.Element
}

const random = (min = 0, max = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const WordsContextProvider = ({
  children,
}: WordsContextProviderProps) => {
  const [correctAnswer, setCorrectAnswer] = useState<string>('')
  const [words, setWords] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const setNewCorrectAnswer = () => {
    setCorrectAnswer(words[random(0, words.length)].toUpperCase())
  }

  useEffect(() => {
    const fetchWords = async () => {
      try {
        setIsLoading(true)
        const response: string[] = await fetch(
          'https://random-word-api.herokuapp.com/all'
        ).then((res) => (res.ok ? res.json() : Promise.reject(res)))

        const fiveLettersWords = response.filter(
          (word) => word.length === 5 && Math.random() > 0.8
        )

        setWords(fiveLettersWords)
        setCorrectAnswer(
          fiveLettersWords[random(0, fiveLettersWords.length)].toUpperCase()
        )
      } catch (err) {
        console.log(err, 'Ha habido un error')
        alert('Ha ocurrido un error :(')
      }
      setIsLoading(false)
    }

    fetchWords()
  }, [])

  const wordsProviderValue = {
    correctAnswer,
    setNewCorrectAnswer,
    isLoading,
  }

  return (
    <WordsContext.Provider value={wordsProviderValue}>
      {children}
    </WordsContext.Provider>
  )
}

export default WordsContext
