import {Status} from "./Status";
import {sleep} from "./sleep";

export async function getMock(data, code, delay = 1, errorMsg = '') {
	const status = new Status(false, false, errorMsg, code);
	const response = {
		data,
		status,
	}

	if (code !== 200) {
		status.error = true;
		status.errorMsg = errorMsg;
	}

	await sleep(1000 * delay)

	return response;
}