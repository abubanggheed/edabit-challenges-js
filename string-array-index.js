function find_index(arr, str) {
	if (arr === []){
		return false;}else{
			return find_index_helper(arr,str,0);
		}
}
function find_index_helper(arr,str,i){
	if (arr[i] === str){
		return i;
	}else if (i === arr.length-1){
		return 'Not found.';
	}else{
		return find_index_helper(arr,str,i+1);
	}
}
