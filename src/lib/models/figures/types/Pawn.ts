import { CellCoord } from '../../board/CellCoords'
import Figure, { IFigure } from '../Figure'

class Pawn extends Figure {
  constructor (props: IFigure) {
    super(props)
  }

  getPotentialPositions: () => CellCoord[] = () => {
    return []
  }
}

export default Pawn
