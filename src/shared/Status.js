import {immerable} from "immer";

/*
Дефолтный статус загрузки элемента с сервера
 */

export class Status {
	[immerable] = true

	constructor(loading = true, error = false, errorMsg = '', code = -1) {
		this.loading = loading;
		this.error = error;
		this.errorMsg = errorMsg;
		this.code = code;
	}
}