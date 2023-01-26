import {createCoords} from "./createCoords";

export const players = {
	byId: {
		0: {
			id: 0,
			name: 'Daria',
			characterId: 0,
			position: createCoords(7, 1),
			locationId: 'hallway',
		},
		1: {
			id: 1,
			name: 'Vanya',
			characterId: 1,
			position: createCoords(19, 24),
			locationId: 'hallway',
		}
	},
	all: [0, 1],
}