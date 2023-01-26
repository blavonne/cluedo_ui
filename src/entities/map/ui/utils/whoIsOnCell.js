export function whoIsOnCell(players, col, row) {
	for (let i = 0; i < players.all.length; i++) {
		let playerId = players.all[i];
		let p = players.byId[playerId];

		if (p.position.col === col && p.position.row === row)
			return playerId;
	}

	return null;
}