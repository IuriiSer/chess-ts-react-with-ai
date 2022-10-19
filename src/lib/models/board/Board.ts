import { CellData } from './Cell'
import { CellColors } from './CellColors'
import { CellCoords } from './CellCoords'

export default class BoardData {
  private readonly _cells: CellData[] = []
  private isInited: boolean = false
  private _cellsCoords: CellCoords = {}

  public get cells (): CellData[] {
    return this._cells
  }

  public initCells = (): void => {
    if (this.isInited) return
    const boardSize = 8
    for (let rowInd = 0; rowInd < boardSize; rowInd += 1) {
      for (let colInd = 0; colInd < boardSize; colInd += 1) {
        if ((rowInd + colInd) % 2 === 0) {
          const cell = new CellData({ color: CellColors.Light })
          this._cells.push(cell)
          this._cellsCoords[cell.id] = { row: rowInd, col: colInd }
          continue
        }
        const cell = new CellData({ color: CellColors.Dark })
        this._cells.push(cell)
        this._cellsCoords[cell.id] = { row: rowInd, col: colInd }
      }
    }
    this.isInited = true
  }
}
