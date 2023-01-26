import {area} from "./area";
import {createCoords} from "./createCoords";

export const rooms = {
	byId: {
		kitchen: {
			id: 'kitchen',
			name: 'Кухня',
			area: area.kitchen,
			doors: [
				createCoords(6, 3),
				createCoords(1, 6),
			],
			players: [],
		},
		library: {
			id: 'library',
			name: 'Библиотека',
			area: area.library,
			doors: [
				createCoords(3, 9),
				createCoords(7, 12),
				createCoords(5, 16),
			],
			players: [],
		},
		billiard: {
			id: 'billiard',
			name: 'Бильярдная',
			area: area.billiard,
			doors: [
				createCoords(3, 19),
				createCoords(6, 24),
			],
			players: [],
		},
		dining: {
			id: 'dining',
			name: 'Столовая',
			area: area.dining,
			doors: [
				createCoords(12, 11),
				createCoords(15, 13),
				createCoords(12, 15),
				createCoords(10, 13),
			],
			players: [],
		},
		cabinet: {
			id: 'cabinet',
			name: 'Кабинет',
			area: area.cabinet,
			doors: [
				createCoords(10, 18),
				createCoords(15, 18),
				createCoords(9, 22),
				createCoords(16, 22),
			],
			players: [],
		},
		living: {
			id: 'living',
			name: 'Гостиная',
			area: area.living,
			doors: [
				createCoords(9, 4),
				createCoords(16, 4),
				createCoords(10, 8),
				createCoords(15, 8),
			],
			players: [],
		},
		garden: {
			id: 'garden',
			name: 'Зимний сад',
			area: area.garden,
			doors: [
				createCoords(20, 3),
				createCoords(24, 4),
			],
			players: [],
		},
		storage: {
			id: 'storage',
			name: 'Кладовая',
			area: area.storage,
			doors: [
				createCoords(20, 7),
				createCoords(23, 10),
			],
			players: [],
		},
		bedroom: {
			id: 'bedroom',
			name: 'Спальня',
			area: area.bedroom,
			doors: [
				createCoords(20, 13),
				createCoords(19, 16),
				createCoords(24, 17),
			],
			players: [],
		},
		bathroom: {
			id: 'bathroom',
			name: 'Ванная',
			area: area.bathroom,
			doors: [
				createCoords(22, 20),
				createCoords(20, 23),
			],
			players: [],
		},
		hallway: {
			id: 'hallway',
			name: 'Коридор',
			area: area.hallway,
			doors: [],
			players: [],
		}
	},
	all: [
		'kitchen',
		'library',
		'living',
		'billiard',
		'dining',
		'cabinet',
		'garden',
		'storage',
		'bedroom',
		'bathroom',
		'hallway',
	],
}