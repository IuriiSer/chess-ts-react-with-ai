import { Cell } from './Cell';
import { CellColors } from './CellColors';
import { CellCoords } from './CellCoords';

export class Board {
	private _cells: Cell[][] = [];
	private _cellsCoords: CellCoords = {};

	public get cells(): Cell[][] {
		return this._cells;
	}

	public initCells = (): void => {
		const boadSize = 8;
		for (let rowInd = 0; rowInd < boadSize; rowInd += 1) {
			const cellsRow: Cell[] = [];
			for (let colInd = 0; rowInd < boadSize; rowInd += 1) {
				if ((rowInd * boadSize + colInd) % 2) {
					const cell = new Cell({ color: CellColors.Light });
					cellsRow.push(cell);
					this._cellsCoords[cell.id] = { row: rowInd, col: colInd };
					continue;
				}
				cellsRow.push(new Cell({ color: CellColors.Dark }));
			}
			this._cells.push(cellsRow);
		}
	};
}
