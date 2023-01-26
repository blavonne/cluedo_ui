import React from "react";
import classNames from 'classnames';
import {responseExample} from "../reducer/response";
import {getBoardMatrix} from "./utils/getMapMatrix";
import {HandySvg} from 'handy-svg';
import foots from '../../../shared/imges/foots.svg';
import door from '../../../shared/imges/door.svg';
import {HALLWAY} from "./utils/defines";
import './style.scss';

function getClassProps(cell) {
	return classNames('square',
		cell.roomId,
		{door: cell.isDoor},
		{with_player: cell.playerId !== null}
	);
}

export function Map({playersCount}) {
	// карта должна знать о кол-ве игроков; в комнатах карты могут быть
	// карточки, если игроков всего двое
	const response = responseExample;
	const board = getBoardMatrix(response.rooms, response.players);

	return (
		<div className='game_board'>
			{board.all.map(row => {
				return (
					<div className='board_row' key={row}>
						{board.byId[row].all.map(col => {
							const cell = board.byId[row].byId[col];
							const {roomId, isDoor, playerId} = cell;
							const isHall = roomId === HALLWAY;

							return (
								<div className={getClassProps(cell)}
									 key={row + col}>
									{isHall && playerId === null &&
										<HandySvg src={foots}
												  className='foots-svg'/>}
									{isDoor && <HandySvg src={door}
														 className='door-svg'/>}
									{playerId !== null &&
										<span>P{cell.playerId}</span>}
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}
