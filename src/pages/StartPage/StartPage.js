import React from "react";
import {CharacterList} from "../../widgets/CharacterList/CharacterList";
import {Legend} from "../../widgets/Legend/Legend";
import {UserBar} from "../../widgets/UserBar/UserBar";
import './style.scss';

function StartPage() {
	return (
		<div className='start_page'>
			<UserBar/>
			<h1>
				Cluedo - детективная настольная игра
			</h1>
			<h2>
				Преступление
			</h2>
			<Legend/>
			<h2>
				Подозреваемые
			</h2>
			<CharacterList/>
		</div>
	)
}

export default StartPage;