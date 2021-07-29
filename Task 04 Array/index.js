function jajanBoba (uangJajan) {

	const listBoba = [
    ['Xing Fu Tang', 38000], 
    ['OneZo', 53500],
    ['KOI The', 36000],
    ['Chatime', 25000],
    ['Kokumi', 42000],
    ['Bubble Station Milk', 13000]
]
	console.log("David mulai jajan dengan uang jajan"+ uangJajan +"rupiah.");
	for(i=0;i<listBoba.length;i++){
		if(uangJajan-listBoba[i][1]>=0){
			console.log("Dengan uang " + uangJajan + " cukup unutk membeli " + listBoba[i][0] + " denganHarga" + listBoba[i][1]);
			uangJajan -= listBoba[i][1]
			console.log("Jadi uang david sekarang " + uangJajan);
		}else{
			console.log("dengan uang " + uangJajan + " tidak bisa membeli " + listBoba[i]);
		}
	}
	console.log("David pulang ke rumah dengan uang "+uangJajan );
}

jajanBoba(100000)
