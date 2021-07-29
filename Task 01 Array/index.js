function menghitungAngka (angka) {

	if(typeof angka === "string"){
		console.log("Maaf anda harus memasukan angka");
	}else {
	
	let hasil=null;
	if(angka===null){
		return 0;
	}
	for(i=0;i<angka.length;i++){
		hasil += angka[i];
	}
	return hasil;
	}

	
}

console.log(menghitungAngka([10,10]));
