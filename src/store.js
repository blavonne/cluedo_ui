import {configureStore} from '@reduxjs/toolkit'
import {characterReducer} from "./entities/character/reducer/index";

/*
configureStore включает в себя redux-thunk
 */

export default configureStore({
	reducer: {
		character: characterReducer,
	},
})