import { useContext } from 'react'

import UserAnswerContext from '../store/userAnswer'
import AttemptContext from '../store/attempt'
import WordsContext from '../store/words'

import BoardLetterField from './BoardLetterField'

type RowLetterFieldProps = {
  rowNumber: number
}

const RowLetterField = ({ rowNumber }: RowLetterFieldProps) => {
  const userAnswerContext = useContext(UserAnswerContext)
  const attemptContext = useContext(AttemptContext)
  const wordsContext = useContext(WordsContext)

  const boardFields = []

  for (let i = 0; i < 5; i++) {
    const isLetterCorrect =
      attemptContext.attempt > rowNumber &&
      userAnswerContext.userAnswer[rowNumber - 1] &&
      userAnswerContext.userAnswer[rowNumber - 1][i] ===
        wordsContext.correctAnswer[i]

    const isLetterIncluded =
      attemptContext.attempt > rowNumber &&
      userAnswerContext.userAnswer[rowNumber - 1] &&
      wordsContext.correctAnswer.includes(
        userAnswerContext.userAnswer[rowNumber - 1][i]
      )

    boardFields.push(
      <BoardLetterField
        key={i}
        styles={`${
          isLetterCorrect
            ? 'bg-primary-green'
            : isLetterIncluded
            ? 'bg-primary-yellow'
            : 'bg-board-letter'
        }`}
      >
        {userAnswerContext.userAnswer[rowNumber - 1]
          ? userAnswerContext.userAnswer[rowNumber - 1][i]
          : ''}
      </BoardLetterField>
    )
  }

  return (
    <div className='flex gap-2 justify-center text-white'>{boardFields}</div>
  )
}

export default RowLetterField
