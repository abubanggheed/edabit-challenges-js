function MultiplyByLength(arr) {
	for (i = 0; i < arr.length; i++){
		arr[i]*=arr.length;
	}
	return arr;
}
