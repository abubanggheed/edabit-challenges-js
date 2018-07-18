function nameShuffle(str) {
	var names = str.split(' ');
	names.reverse();
	return names.join(' ');
}
