// immer можно удалить из package json

export function createStatus(loading = true, error = false, errorMsg = '', code = -1) {
	return {
		loading,
		error,
		errorMsg,
		code
	}
}