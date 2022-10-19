import React from 'react'
import BoardData from '../../lib/models/board/Board'
import Cell from '../Cell/Cell'

import Container from '@mui/material/Container'
interface IBoard {
  board: BoardData
}

const Board: React.FC<IBoard> = ({ board }: IBoard) => {
  return (
    <Container maxWidth='lg'>
      {board.cells.map((cell) => (
        <Cell key={cell.id} cell={cell} />
      ))}
    </Container>
  )
}

export default Board
