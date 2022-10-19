import { CellData, CellID } from './Cell'
import { CellColors } from './CellColors'
import { CellCoord } from './CellCoords'

export default class BoardData {
  protected boardSize: number = 8
  private isInited: boolean = false
  private readonly _cells: CellData[] = []
  private readonly cellsCoords: Map<CellID, CellCoord> = new Map()

  public initCells = (): void => {
    if (this.isInited) return
    for (let rowInd = 0; rowInd < this.boardSize; rowInd += 1) {
      for (let colInd = 0; colInd < this.boardSize; colInd += 1) {
        const isLight: boolean = (rowInd + colInd) % 2 === 0
        const cell = isLight
          ? new CellData({ color: CellColors.Light })
          : new CellData({ color: CellColors.Dark })
        this._cells.push(cell)
        this.cellsCoords.set(cell.id, { row: rowInd, col: colInd })
      }
    }
    this.isInited = true
  }

  public get cells (): CellData[] {
    return this._cells
  }

  public getCellByCoords: (coords: CellCoord) => CellData | null = (coords: CellCoord) => {
    return this._cells[this.boardSize * coords.row + coords.col] ?? null
  }

  public getCellByID: (id: CellID) => CellData | null = (id: CellID) => {
    const coords = this.getCellCoordsByID(id)
    if (coords == null) return null
    return this._cells[this.boardSize * coords.row + coords.col]
  }

  public getCellCoordsByID: (id: CellID) => CellCoord | null = (id: CellID) => {
    return this.cellsCoords.get(id) ?? null
  }
}
