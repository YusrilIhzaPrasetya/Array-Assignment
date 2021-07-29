function reverseAngka (angka) {
	
	function reverseIndex(nomor){
		let number = nomor.toString();
		let temp = "";
		for(let i = number.length -1;i>=0;i--){
			temp += number[i];
		}
		return Number(temp);
	}

	let reverseArray = [];
	for(let i=angka.length-1;i>=0;i--){
		reverseArray.push(reverseIndex(angka[i]))
	}
	return reverseArray;
}
console.log(reverseAngka([123,456])); //456,123