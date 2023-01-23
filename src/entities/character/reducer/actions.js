import {Status} from "../../../shared/Status";
import {load} from "./characterReducer";
import {isDev} from "../../../shared/isDev";
import {getMock} from "../../../shared/getMock";
import {responseExample} from "../response";
import {serialise} from "../../../shared/serialize";

export function loadCharactersThunk() {
	return async (dispatch, getState) => {
		const url = '';
		let data = [];
		let status = new Status();

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

		dispatch(load(data, serialise(status)));
	}
}