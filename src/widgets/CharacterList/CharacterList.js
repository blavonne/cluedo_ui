import {useDispatch, useSelector} from "react-redux";
import {Fallback} from "../../shared/Fallback";
import {useEffect} from "react";
import {loadCharactersThunk} from "../../entities/character/reducer/actions";
import {getCharacters} from "../../entities/character/reducer/selectors";
import {getCharacterImage} from "../../entities/character/reducer/utils";
import './style.scss';

function getRows(all) {
	const charactersInRow = 3;
	const rowCount = Math.ceil(all.length / charactersInRow);
	const res = [];

	for (let i = 0; i < rowCount; i++) {
		const start = i * charactersInRow;
		const end = (i + 1) * charactersInRow;

		res.push(all.slice(start, end));
	}

	return res;
}

export function CharacterList() {
	const dispatch = useDispatch();
	const src = useSelector(state => getCharacters(state));
	const rows = getRows(src.all);

	useEffect(() => {
		function loadData() {
			dispatch(loadCharactersThunk());
		}

		src.status.loading && loadData();
	}, [src.status.loading]);

	return <Fallback status={src.status}>
		<div className='character_list'>
			{rows.map((row, i) => {
				return (
					<div className='character_row' key={'row' + i}>
						{row.map(id => {
							const character = src.byId[id];

							return (
								<div className='character' key={id}>
									<h3>
										{character.name}
									</h3>
									{getCharacterImage(character.id)}
									<div>
										{character.legend}
									</div>
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
	</Fallback>
}