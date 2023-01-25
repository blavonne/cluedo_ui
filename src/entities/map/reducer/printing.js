import {responseExample} from "./response";

let x = {
	from: 9,
	to: 16,
};
let y = {
	from: 1,
	to: 8,
};

for (let i = x.from; i <= x.to; i++) {
	for (let j = y.from; j <= y.to; j++) {
		console.log(`[${i + ', ' + j}],`);
	}
}

for (let i = 1; i < 25; i++) {
	// ищет незанятые  клетки
	for (let j = 1; j < 25; j++) {
		let rooms = responseExample.rooms.all;
		let isBusy = false;

		for (let m = 0; m < rooms.length; m++) {
			let roomId = rooms[m];
			let room = responseExample.rooms.byId[roomId];
			let area = room.area;

			for (let k = 0; k < area.length; k++) {
				if (area[k][0] === i && area[k][1] === j) {
					isBusy = true;
					break;
				}
			}

			if (isBusy)
				break;
		}

		if (isBusy)
			break;
		else
			console.log(`[${i + ', ' + j}],`);
	}
}