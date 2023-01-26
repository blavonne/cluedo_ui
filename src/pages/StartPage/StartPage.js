import React from "react";
import {CharacterList} from "../../entities/character/ui/CharacterList";

function StartPage() {
	return (<div className='start_page'>
		<h1>
			Cluedo - детективная настольная игра
		</h1>
		<h2>
			Преступление
		</h2>
		<div>
			В загородном особняке миллионера произошло загадочное
			преступление – убит хозяин резиденции. Под
			подозрением оказались шестеро молодых людей, которые были
			приглашены к убитому в тот день. Следствию
			предстоит узнать, кто сделал ужасное деяние, ведь этот кто-то
			сейчас в комнате вместе с остальными.
		</div>
		<h2>
			Подозреваемые:
		</h2>
		<CharacterList/>
	</div>)
}

export default StartPage;