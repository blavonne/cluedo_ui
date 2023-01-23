import {createSlice} from "@reduxjs/toolkit";
import {Status} from "../../../shared/Status";

const initialState = {
	byId: {},
	all: [],
	status: new Status(),
}

const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		load: {
			reducer: (state, action) => {
				const {byId, all, status} = action.payload;

				state.byId = byId;
				state.all = all;
				state.status = status;
			},
			prepare: (data, status) => {
				// data - массив объектов
				const all = [];
				const byId = {};

				data.forEach(el => {
					const {id} = el;
					byId[id] = el;
					all.push(id);
				})

				return {
					payload: {
						byId,
						all,
						status,
					}
				}
			}
		},
	}
})

export const { load } = characterSlice.actions;
export default characterSlice.reducer;