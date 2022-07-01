import { useContext } from 'react'

import UserAnswerContext from '../store/userAnswer'
import AttemptContext from '../store/attempt'

const keys = [
  { value: 'Q', size: 1 },
  { value: 'W', size: 1 },
  { value: 'E', size: 1 },
  { value: 'R', size: 1 },
  { value: 'T', size: 1 },
  { value: 'Y', size: 1 },
  { value: 'U', size: 1 },
  { value: 'I', size: 1 },
  { value: 'O', size: 1 },
  { value: 'P', size: 1 },
  { value: 'A', size: 1 },
  { value: 'S', size: 1 },
  { value: 'D', size: 1 },
  { value: 'F', size: 1 },
  { value: 'G', size: 1 },
  { value: 'H', size: 1 },
  { value: 'J', size: 1 },
  { value: 'K', size: 1 },
  { value: 'L', size: 1 },
  { value: 'ENTER', size: 2 },
  { value: 'Z', size: 1 },
  { value: 'X', size: 1 },
  { value: 'C', size: 1 },
  { value: 'V', size: 1 },
  { value: 'B', size: 1 },
  { value: 'N', size: 1 },
  { value: 'M', size: 1 },
  { value: 'DEL', size: 2 },
]

const DigitalKeyboard = () => {
  const userAnswerContext = useContext(UserAnswerContext)
  const attemptContext = useContext(AttemptContext)

  const keyPressHandler = (keyValue: string) => {
    if (keyValue === 'DEL') {
      userAnswerContext.setUserAnswer((prev) => {
        const newAnswer = [...prev]
        newAnswer[attemptContext.attempt - 1].substring(
          0,
          prev[attemptContext.attempt - 1].length - 1
        )
        return newAnswer
      })
    } else {
      userAnswerContext.setUserAnswer((prev) => {
        console.log(prev)
        const newAnswer = [...prev]
        console.log(newAnswer[attemptContext.attempt - 1])
        if (newAnswer[attemptContext.attempt - 1]) {
          newAnswer[attemptContext.attempt - 1] += keyValue
        } else {
          newAnswer[attemptContext.attempt - 1] = keyValue
        }
        return newAnswer
      })
    }
  }

  return (
    <div className='bg-primary-ligh w-full rounded-lg flex items-center justify-end flex-wrap gap-3 p-8 mt-16 max-w-keyboard mx-auto dark:bg-header-dark dark:text-white'>
      {keys.map((key) => (
        <div
          key={key.value}
          className={`
            aspect-square rounded-md flex flex-col justify-center items-center bg-key h-10 font-normal text-lg cursor-pointer hover:bg-gray-400 duration-500 dark:bg-key-dark ${
              (key.size > 1 && 'aspect-video') || (key.value === 'L' && 'mr-6')
            }`}
          onClick={(e) => keyPressHandler(key.value)}
        >
          {key.value}
        </div>
      ))}
    </div>
  )
}

export default DigitalKeyboard
