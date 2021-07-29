function uniqeArray (array) {
	const result= [];
		for(let i = 0; i < array.length;i++){
			let duplicate = false
		for(let j = 0; j < result.length;j++){
			if(result[j]===array[i]){
				duplicate = true
				break
				}
			}

			if(duplicate === false){
				result.push(array[i])
			}
		}
		return result;
}

console.log(uniqeArray([123,325,123,534,321,534]))