
export function Square ({ value, onSquareClick }) {
  return (
    <div className='flex justify-center items-center bg-orange-300 w-20 h-20 min-[281px]:w-24 min-[281px]:h-24 sm:w-28 sm:h-28 hover:bg-orange-400 duration-300 cursor-pointer' onClick={onSquareClick}>
      {value}
    </div>
  )
}
