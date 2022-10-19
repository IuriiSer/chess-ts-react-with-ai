import Figure from '../figures/Figure'
import { CellColors } from './CellColors'
import { v4 as uuidv4 } from 'uuid'

export type CellID = string

interface ICellData {
  color: CellColors
  figure?: Figure
}

export class CellData {
  readonly color: CellColors
  readonly id: CellID = uuidv4()
  public figure: Figure | null
  public isAvailable: boolean = false

  constructor (props: ICellData) {
    this.color = props.color
    this.figure = (props.figure != null) ? props.figure : null
  }
}
