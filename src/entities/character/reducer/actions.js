import {createStatus} from "../../../shared/Status";
import {load} from "./characterReducer";
import {isDev} from "../../../shared/isDev";
import {getMock} from "../../../shared/getMock";
import {responseExample} from "./response";

export function loadCharactersThunk() {
	return async (dispatch, getState) => {
		const url = '';
		let data = [];
		let status = createStatus();

		if (isDev()) {
			const response = await getMock(responseExample);
			data = response.data;
			status = response.status;
		}
		else {
			await fetch(url)
				.then(res => {
					status.loading = false;
					status.code = res.status;

					if (!res.ok)
						throw new Error();

					return res;
				})
				.then(res => res.json())
				.then(res => {
					data = res;
				})
				.catch(() => {
					status.error = true;
				})
		}

		dispatch(load(data, status));
	}
}