import {useDispatch, useSelector} from "react-redux";
import {Fallback} from "../../../shared/Fallback";
import {useEffect} from "react";
import {loadCharactersThunk} from "../reducer/actions";

export function CharacterList() {
	const dispatch = useDispatch();
	const src = useSelector(state => state.character);

	useEffect(() => {
		function loadData() {
			dispatch(loadCharactersThunk());
		}

		src.status.loading && loadData();
	}, [src.status.loading]);

	return <Fallback status={src.status}>
		{src.all.map(id => {
			const character = src.byId[id];
			return (
				<div className='character' key={id}>
					<h3>
						{character.name}
					</h3>
					<span>
						{character.legend}
					</span>
				</div>
			)
		})}
	</Fallback>
}