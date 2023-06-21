import React from "react";
import {response} from "../../entities/user/reducer/response";
import More from '../../shared/imges/more.svg';
import './style.scss';

export function UserBar() {
	const src = response;

	if (src.loggedIn) {
		return (
			<div className='user_bar'>
				<div className='user_name'>
					{src.login}
				</div>
				<button className='dropdown menu'>
					<img src={More} alt='Показать больше'/>
				</button>
			</div>
		)
	}

	return null;
}