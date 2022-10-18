export interface CellCoords {
	[key: string]: CellCoord;
}

type CellCoord = {
	col: number;
	row: number;
};
