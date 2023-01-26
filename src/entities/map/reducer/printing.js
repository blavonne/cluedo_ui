import {area} from "../ui/utils/area";

let x = {
	from: 1,
	to: 6,
};
let y = {
	from: 1,
	to: 6,
};

for (let i = x.from; i <= x.to; i++) {
	for (let j = y.from; j <= y.to; j++) {
		console.log(`createCoords(${i}, ${j}),`);
	}
}

let allAvailableCoords = area.kitchen.concat(area.library).concat(area.billiard).concat(area.cabinet).concat(area.living).concat(area.dining).concat(area.garden).concat(area.storage).concat(area.bedroom).concat(area.bathroom);

for (let col = 1; col < 25; col++) {
	for (let row = 1; row < 25; row++) {
		let isBusy = false;

		for (let k = 0; k < allAvailableCoords.length; k++) {
			if (allAvailableCoords[k].col === col && allAvailableCoords[k].row === row) {
				isBusy = true;
				break;
			}
		}

		if (!isBusy)
			console.log(`createCoords(${col}, ${row}),`);
	}
}