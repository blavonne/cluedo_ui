export function isDoor(rooms, x, y) {
	for (let i = 0; i < rooms.all.length; i++) {
		let id = rooms.all[i];
		let room =  rooms.byId[id];
		let entries = room.entries;

		for (let j = 0; j < entries.length; j++) {
			let coords = entries[j];

			if (coords[0] === x && coords[1] === y)
				return true;
		}
	}

	return false;
}