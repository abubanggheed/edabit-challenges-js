function isFourLetters(arr) {
	 let ret = [];
   for (word of arr) {
     if (word.length === 4) {
       ret.push(word);
     }
   }
   return ret;
}
