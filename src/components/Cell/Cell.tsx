import React from 'react'
import { CellData } from '../../lib/models/board/Cell'

import { Box } from '@mui/material'
interface ICell {
  cell: CellData
}

const Cell: React.FC<ICell> = ({ cell }: ICell) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, id, figure, isAvailable } = cell

  return (
    <Box>
      <p>{color}</p>
    </Box>
  )
}

export default Cell
