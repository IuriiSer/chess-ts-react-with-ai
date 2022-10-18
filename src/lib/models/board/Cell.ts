import { Figures } from '../figures/Figures';
import { CellColors } from './CellColors';
import { v4 as uuidv4 } from 'uuid';

interface newCell {
	color: CellColors;
	figure?: Figures;
}

export class Cell {
	readonly color: CellColors;
	readonly id: string = uuidv4();
	public figure: Figures | null;

	constructor(props: newCell) {
		this.color = props.color;
		this.figure = props.figure || null;
	}
}
