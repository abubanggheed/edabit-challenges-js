function findSmallestNum(arr) {
	var brr = arr.slice(0);
	brr.sort(function(a,b){return a-b});
	if (brr.length===0){
		return nill;}
	else{
	return brr[0];}
}
