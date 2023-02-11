import React from "react";
import Plum from '../../../shared/imges/Plum.png';
import Orchid from '../../../shared/imges/Orchid.png';
import Scarlett from '../../../shared/imges/Scarlett.png';
import Green from '../../../shared/imges/Green.png';
import Pickock from '../../../shared/imges/Pickock.png';
import Mastard from '../../../shared/imges/Mastard.png';

export function getCharacterImage(id) {
	// хардкод
	switch (id) {
		case (0):
			return <img src={Plum} alt='Изображение Плама'/>;
		case (1):
			return <img src={Mastard} alt='Изображение Мастарда'/>
		case (2):
			return <img src={Green} alt='Изображение Грина'/>
		case (3):
			return <img src={Orchid} alt='Изображение Орчид'/>
		case (4):
			return <img src={Pickock} alt='Изображение Пикок'/>
		case (5):
			return <img src={Scarlett} alt='Изображение Скарлетт'/>
		default:
			return null;
	}
}