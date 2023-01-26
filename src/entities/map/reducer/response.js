import {players} from "../ui/utils/players";
import {rooms} from "../ui/utils/rooms";

export const responseExample = {
	rooms,
	players,
	size: 24,
	board: {
		0: {
			0: {
				roomId: 'kitchen',
				characterId: null,
				isDoor: false,
			},
		},
	},
}