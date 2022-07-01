import LetterField from './LetterField'

type BoardLetterProps = {
  children: string
  styles: string
}

const BoardLetterField = ({ children, styles }: BoardLetterProps) => {
  return <LetterField styles={styles}>{children}</LetterField>
}

export default BoardLetterField
