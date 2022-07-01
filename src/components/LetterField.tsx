type LetterField = {
  children: string
  styles: string
}

const LetterField = ({ children, styles }: LetterField) => {
  return (
    <div
      className={`w-letter-field aspect-square rounded-md flex flex-col justify-center items-center ${styles}`}
    >
      <span className='font-bold block text-3xl'>{children}</span>
    </div>
  )
}

export default LetterField
