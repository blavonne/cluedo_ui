import {isDoor} from "./isDoor";
import {isHallway} from "./isHallway";
import {whoIsOnCell} from "./whoIsOnCell";
import {createDataBaseSlice} from "../../../../shared/createDataBaseSlice";
import {createCoords} from "./createCoords";

function createCell(roomId = 'hallway', playerId, isDoor) {
	return {
		roomId,
		playerId,
		isDoor,
	}
}

function boardSorting(a, b) {
	const indexA = parseInt(a.slice(4));
	const indexB = parseInt(b.slice(4));

	if (indexA > indexB)
		return 1;
	else if (indexA === indexB)
		return 0;
	else
		return -1;
}

export function getBoardMatrix(rooms, players) {
	const board = createDataBaseSlice();

	for (let i = 0; i < rooms.all.length; i++) {
		let id = rooms.all[i];
		let room = rooms.byId[id];
		let area = room.area;

		for (let j = 0; j < area.length; j++) {
			let coords = createCoords(area[j].col, area[j].row);

			let row = 'row_' + coords.row;
			let col = 'col_' + coords.col;

			if (!board.all.includes(row)) {
				board.all.push(row);
				board.byId[row] = createDataBaseSlice();
			}

			if (!board.byId[row].all.includes(col)) {
				// Каждая клетка hallway может содержать игрока
				// Клетки не hallway не могут содержать игроков
				const isHall = isHallway(rooms, coords.col, coords.row);
				const playerId = isHall ? whoIsOnCell(players, coords.col, coords.row) : null;
				const door = isHall ? false : isDoor(rooms, coords.col, coords.row);

				board.byId[row].all.push(col);
				board.byId[row].byId[col] = createCell(room.id, playerId, door);
			}
		}
	}

	board.all.sort(boardSorting);

	board.all.forEach(row => {
		board.byId[row].all.sort(boardSorting);
	})

	return board;
}

