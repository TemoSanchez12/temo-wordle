import { useContext } from 'react'

import ScoreContext from '../store/score'

type HeaderProps = {
  setIsStatsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setInstructionsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ setIsStatsOpen, setInstructionsOpen }: HeaderProps) => {
  const htmlElement = document.getElementById('html')

  const scoreContext = useContext(ScoreContext)

  const clickThemeButtonHandler = () => {
    htmlElement?.classList.toggle('dark')
  }

  return (
    <div className='bg-primary-ligh mt-8 w-full h-24 rounded-lg flex justify-between items-center px-4 dark:bg-header-dark dark:text-white relative'>
      <div
        className='w-7 aspect-square cursor-pointer'
        onClick={() => {
          setInstructionsOpen(true)
          console.log('Hola como les va')
        }}
      >
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Wikibooks-help-icon.svg/2048px-Wikibooks-help-icon.svg.png'
          alt='help-icon'
        />
      </div>

      <div>
        <h1 className='uppercase font-black text-3xl'>Temo Wordle</h1>
      </div>

      <div className='flex gap-x-3'>
        <div
          className='w-7 aspect-square cursor-pointer'
          onClick={() => setIsStatsOpen(true)}
        >
          <img
            src='https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/dollar-stats-icon.png'
            alt='stats-icon'
          />
        </div>
        <div
          className={`bg-gradient-to-t flex items-center cursor-pointer from-primary-icon-light to-secondary-icon-light 
        w-12 h-6 rounded-3xl shadow-md dark:to-primary-icon-dark dark:from-secondary-icon-dark`}
          onClick={clickThemeButtonHandler}
        >
          <div className='h-5 w-5 ml-1 transition-all rounded-full bg-gradient-to-t to-icon-sun-primary from-icon-sun-secondary mr-auto dark:ml-auto dark:mr-1 dark:to-icon-moon-primary dark:from-icon-moon-primary'></div>
        </div>
      </div>

      <div className='absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 mt-4'>
        <div className='flex justify-between w-36'>
          <div className='flex flex-col justify-center items-center'>
            <span className='font-bold text-3xl'>
              {scoreContext.score.games}
            </span>
            <span>Jugadas</span>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <span className='font-bold text-3xl'>
              {scoreContext.score.victories}
            </span>
            <span>Victorias</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
