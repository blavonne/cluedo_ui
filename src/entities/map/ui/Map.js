import React from "react";
import classNames from 'classnames';
import {responseExample} from "../reducer/response";
import './style.scss';
import {DOOR, getMapMatrix, HALLWAY, ROOM} from "./utils/getMapMatrix";
import {HandySvg} from 'handy-svg';
import foots from '../../../shared/imges/foots.svg';
import door from '../../../shared/imges/door.svg';

export function Map({playersCount}) {
	// карта должна знать о кол-ве игроков; в комнатах карты могут быть
	// карточки, если игроков всего двое
	const rooms = responseExample.rooms;
	const mapMatrix = getMapMatrix(rooms);

	return (
		<div className='game_board'>
			{mapMatrix.map((row, i) => {
				return (
					<div className='board_row' key={i}>
						{row.map((field, j) => {
							const className = classNames('square',
								{room: field === ROOM},
								{door: field === DOOR},
								{hallway: field === HALLWAY});
							return (
								<div className={className} key={j}>
									{field === HALLWAY && <HandySvg src={foots}
																className='foots-svg'/>}
									{field === DOOR && <HandySvg src={door} className='door-svg'/>}
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}
