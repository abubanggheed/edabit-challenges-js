function reverse(bool) {
	if (typeof bool === 'boolean') {
		return !bool;
	}
	return 'boolean expected';
}
