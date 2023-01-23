export function serialise(classInstance) {
	const str = JSON.stringify(classInstance);

	return JSON.parse(str);
}