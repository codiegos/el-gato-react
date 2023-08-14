import { useState } from 'react'
import { Board } from './components/Board'

function Game () {
  const items = new Array(9).fill(null)
  const [historySquares, setHistorySquares] = useState([items])
  const [currentMove, setCurrentMove] = useState(0)

  const turn = currentMove % 2 === 0
  const currentSquares = historySquares[currentMove]

  const handlePlay = (nextSquares) => {
    const nextHistorySquare = [...historySquares.slice(0, currentMove + 1), nextSquares]
    setHistorySquares(nextHistorySquare)
    setCurrentMove(nextHistorySquare.length - 1)
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove)
  }

  const moves = historySquares.map((_, move) => {
    let description
    move > 0 ? description = `Ir al movimiento ${move}` : description = 'Ir al comienzo del juego'
    return (
      <li key={move} className='flex flex-col my-4 bg-slate-900'>
        <button onClick={() => jumpTo(move)} className='p-1.5 border border-orange-700 rounded hover:scale-105 hover:bg-orange-900 focus:bg-orange-700'>{description}</button>
      </li>
    )
  })

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-orange-900 to-slate-900 text-white text-4xl'>
      <Board squares={currentSquares} turn={turn} onPlay={handlePlay} />
      <ol className='hidden md:inline-block absolute left-3/4 xl:left-2/3 text-xl'>
        {moves}
      </ol>
    </div>
  )
}

export default Game
