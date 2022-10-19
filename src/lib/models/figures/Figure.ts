import { v4 as uuidv4 } from 'uuid'

import { FugureColors } from './FugureColors'
import { FigureTypes } from './FigureTypes'
import { CellCoord } from '../board/CellCoords'

export interface IFigure {
  color: FugureColors
  type: FigureTypes
  cellID: string
}

abstract class Figure {
  readonly id: string = uuidv4()
  readonly color: FugureColors
  readonly type: FigureTypes
  public cellID: string

  constructor ({ color, type, cellID }: IFigure) {
    this.color = color
    this.type = type
    this.cellID = cellID
  }

  abstract getPotentialPositions: () => CellCoord[]
}

export default Figure
