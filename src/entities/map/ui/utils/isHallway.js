export function isHallway(rooms, col, row) {
	for (let i = 0; i < rooms.all.length; i++) {
		let id = rooms.all[i];
		let room =  rooms.byId[id];
		let area = room.area;

		for (let j = 0; j < area.length; j++) {
			let coords = area[j];

			if (coords.col === col && coords.row === row)
				return room.id === 'hallway';
		}
	}
}