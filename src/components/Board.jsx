import { Square } from './Square'

export function Board ({ squares, turn, onPlay }) {
  const items = new Array(9).fill(null)

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = structuredClone(squares)
    if (turn) {
      nextSquares[i] = '❌'
    } else {
      nextSquares[i] = '🔴'
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  const isDraw = !squares.some((square) => square === null)
  const status = (isDraw && 'Empate!') || (winner && `El ganador es: ${winner}`) || (`Le toca a: ${turn ? '❌' : '🔴'}`)

  return (
    <>
      <div className='grid grid-cols-3 place-items-center cursor-pointer h-full bg-slate-700 gap-1'>
        {items.map((_, i) => <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />)}
      </div>
      <h3 className='absolute top-3/4'>{status}</h3>
    </>
  )
}
const calculateWinner = (squares) => {
  const winCases = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  for (let i = 0; i < winCases.length; i++) {
    const [a, b, c] = winCases[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
