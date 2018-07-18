function findLargestNum(arr) {
	var brr = arr.splice(0);
	brr.sort(function(a,b){return b-a});
	if (brr.length===0){
		return nill;
	}else{
		return brr[0];
	}
}
