import Button from './Button'
import LetterField from './LetterField'
import { Modal } from './Modal'

type InstructionsProps = {
  setInstructionsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Instructions = ({ setInstructionsOpen }: InstructionsProps) => {
  return (
    <Modal>
      <div className='dark:text-white'>
        <h3 className='font-bold text-3xl text-center'>Como Jugar</h3>

        <div className='my-4 flex flex-col gap-4'>
          <p className='font-normal text-lg'>
            Adivina la palabra oculta en cinco intentos.
          </p>
          <p>Cada intento debe de tener una palabra valida de 5 letras.</p>
          <p>
            Después de cada intento el color de las letras cambia para mostrar
            que tan cerca estas de acertar la palabra .
          </p>
        </div>

        <div className='text-lg leading-6'>
          <span className='font-bold mb-1 block'>Ejemplos</span>
          <div className='flex gap-3 justify-center'>
            <LetterField styles='bg-primary-green'>G</LetterField>
            <LetterField styles='bg-white dark:bg-primary-dark border border-black dark:border-secondary-dark'>
              A
            </LetterField>
            <LetterField styles='bg-white dark:bg-primary-dark border border-black dark:border-secondary-dark'>
              T
            </LetterField>
            <LetterField styles='bg-white dark:bg-primary-dark border border-black dark:border-secondary-dark'>
              O
            </LetterField>
            <LetterField styles='bg-white dark:bg-primary-dark border border-black dark:border-secondary-dark'>
              S
            </LetterField>
          </div>

          <p className='mt-4 mb-2'>
            La letra <span className='font-bold'>G</span> está en la palabra y
            en la posición correcta
          </p>

          <div className='flex gap-3 justify-center'>
            <LetterField styles='bg-white dark:bg-primary-dark border border-black dark:border-secondary-dark'>
              V
            </LetterField>
            <LetterField styles='bg-white dark:bg-primary-dark border border-black dark:border-secondary-dark'>
              O
            </LetterField>
            <LetterField styles='bg-primary-yellow'>C</LetterField>
            <LetterField styles='bg-white dark:bg-primary-dark border border-black dark:border-secondary-dark'>
              A
            </LetterField>
            <LetterField styles='bg-white dark:bg-primary-dark border border-black dark:border-secondary-dark'>
              L
            </LetterField>
          </div>

          <p className='mt-4'>
            La letra <span className='font-bold'>C</span> está en la palabra
            pero en la posición incorrecta
          </p>

          <p className='mt-10'>
            Puede haber letras repetidas, las pistas son independientes para
            cada letra
          </p>

          <p className='mt-10 text-center font-semibold'>
            Una palabra nueva cada 5 minutos!
          </p>
        </div>

        <Button
          styles='block mx-auto mt-10'
          onClick={() => setInstructionsOpen(false)}
        >
          JUGAR!
        </Button>
      </div>
    </Modal>
  )
}

export default Instructions
