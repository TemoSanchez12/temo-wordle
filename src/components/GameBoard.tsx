import RowLetterField from './RowLetterField'

const GameBoard = () => {
  const fieldRows = []

  for (let i = 0; i < 5; i++) {
    fieldRows.push(<RowLetterField key={i} rowNumber={i + 1} />)
  }

  return <div className='mx-auto mt-20 flex flex-col gap-2'>{fieldRows}</div>
}

export default GameBoard
