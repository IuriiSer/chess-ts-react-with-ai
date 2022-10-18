import React from 'react'
import { CellData } from '../../lib/models/board/Cell'

interface CellProps {
  cell: CellData
}

const Cell: React.FC<CellProps> = ({ cell }: CellProps) => {
  const { color, id, figure, isAvailable } = cell
  console.log('file: Cell.tsx ~ line 11 ~ isAvailable', isAvailable)

  console.log('file: Cell.tsx ~ line 11 ~ figure', figure)

  console.log('file: Cell.tsx ~ line 11 ~ id', id)

  return (
    <>
      <p>{color}</p>
    </>
  )
}

export default Cell
