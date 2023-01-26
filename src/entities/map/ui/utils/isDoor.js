export function isDoor(rooms, col, row) {
	for (let i = 0; i < rooms.all.length; i++) {
		let id = rooms.all[i];
		let room =  rooms.byId[id];
		let doors = room.doors;

		for (let j = 0; j < doors.length; j++) {
			let coords = doors[j];

			if (coords.col === col && coords.row === row)
				return true;
		}
	}

	return false;
}