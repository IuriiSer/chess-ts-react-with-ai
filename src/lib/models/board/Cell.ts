import { Figures } from '../figures/Figures'
import { CellColors } from './CellColors'
import { v4 as uuidv4 } from 'uuid'

interface CellProps {
  color: CellColors
  figure?: Figures
}

export class CellData {
  readonly color: CellColors
  readonly id: string = uuidv4()
  public figure: Figures | null
  public isAvailable: boolean = false

  constructor (props: CellProps) {
    this.color = props.color
    this.figure = (props.figure != null) ? props.figure : null
  }
}
