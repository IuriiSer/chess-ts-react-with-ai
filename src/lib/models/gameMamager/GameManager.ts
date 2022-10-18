import { BoardData } from '../board/Board'
import React from 'react'

interface newGameManager {
  board: BoardData
  setBoard: React.Dispatch<React.SetStateAction<BoardData>>
}

export class GameManager {
  private readonly board: BoardData
  private readonly setBoard: React.Dispatch<React.SetStateAction<BoardData>>

  constructor ({ board, setBoard }: newGameManager) {
    console.log('init new manager')
    this.board = board
    this.setBoard = setBoard

    this.init()
  }

  private init (): void {
    this.board.initCells()
    this.setBoard(this.board)
  }
}
