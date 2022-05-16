let apiURL = "https://api.airtable.com/v0/apppUFd5ryNzP78py/Table%201?api_key=keybFX53WeqK0YLFM";

//this is a global variable from the API
let apiData;

//This is where you 'call' your data

//async is asynchronous
//javascript will work all the data at the same time
async function getData(url){
	let response = await fetch(url);
	let jsonData = await response.json()
	return jsonData;
}


async function main(){
	apiData = await getData(apiURL);
	console.log(apiData);

	for(let i = 0; i < apiData.records.length; i++){
		let name = apiData.records[i].fields.City;
		console.log(name);
		let heading = document.createElement("h2");
		heading.innerHTML = name;
		document.body.appendChild(heading);

/*		let links = document.createElement("a");
		links.href = apiData.records[i].fields.Image;
		//These links could come from different sources if you have a corresponding column
		document.body.appendChild(links);*/
		
		let image = document.createElement("img");
		image.src = apiData.records[i].fields.Image;
		image.height = 500;
		document.body.appendChild(image);

	}


}





main();



