import React from 'react'
import { BoardData } from '../../lib/models/board/Board'
import Cell from '../Cell/Cell'

interface BoardProps {
  board: BoardData
}

const Board: React.FC<BoardProps> = ({ board }: BoardProps) => {
  return (
    <>
      {board.cells.map((cell) => (
        <div key={cell.id}>
        <Cell cell={cell} />
        </div>
      ))}
    </>
  )
}

export default Board
