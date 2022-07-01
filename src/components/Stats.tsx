import { useContext } from 'react'

import ScoreContext from '../store/score'
import WordsContext from '../store/words'

import Button from './Button'
import { Modal } from './Modal'

type StatsProps = {
  setIsStatsOpen: React.Dispatch<React.SetStateAction<boolean>>
  timer: string
}

const Stats = ({ setIsStatsOpen, timer }: StatsProps) => {
  const scoreContext = useContext(ScoreContext)
  const wordsContext = useContext(WordsContext)

  return (
    <Modal>
      <div className='flex flex-col justify-center items-center dark:text-white'>
        <h4 className='font-bold text-3xl mb-8'>Estadisticas</h4>

        <div className='flex justify-around w-full'>
          <div className='flex flex-col justify-center items-center'>
            <span className='font-bold text-3xl'>
              {scoreContext.score.games}
            </span>
            <span>Jugadas</span>
          </div>

          <div className='flex flex-col justify-center items-center mb-8'>
            <span className='font-bold text-3xl'>
              {scoreContext.score.victories}
            </span>
            <span>Victorias</span>
          </div>
        </div>

        {wordsContext.failAnswer.length > 4 && (
          <div>
            <p>
              La palabra era:{' '}
              <span className='text-lg font-bold'>
                {wordsContext.failAnswer}
              </span>
            </p>
          </div>
        )}

        <div className='text-center uppercase'>
          <p className='mt-2 text-md'>Siguiente palabra</p>
          <span className='mt-2 font-bold text-xl'>{timer}</span>
        </div>

        <Button styles='mt-8' onClick={() => setIsStatsOpen(false)}>
          Aceptar
        </Button>
      </div>
    </Modal>
  )
}

export default Stats
