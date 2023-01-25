import {isRoom} from "./isRoom";
import {isDoor} from "./isDoor";

export const DOOR = 'door';
export const ROOM = 'room';
export const HALLWAY = 'hallway';

export function getMapMatrix(rooms) {
	const matrix = [];

	for (let y = 1; y < 25; y++) {
		const row = [];
		for (let x = 1; x < 25; x++) {
			if (isDoor(rooms, x, y))
				row.push(DOOR);
			else if (isRoom(rooms, x, y))
				row.push(ROOM);
			else
				row.push(HALLWAY);
		}
		matrix.push(row);
	}

	return matrix;
}