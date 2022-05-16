let apiURL = "https://api.airtable.com/v0/app10yIJ4ZGFEjgNM/Table%201?api_key=keybFX53WeqK0YLFM";

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

document.getElementById("popup_wrap").style.backgroundColor = "#404040";
document.getElementById("popup_body").style.backgroundColor = "#404040";
document.getElementById("popup_header").style.backgroundColor = "#404040";

/*async function main(){
	apiData = await getData(apiURL);
	console.log(apiData);

	for(let i = 0; i < apiData.records.length; i++){
		let name = apiData.records[i].fields.City;
		console.log(name);
		let heading = document.createElement("h2");
		heading.innerHTML = name;
		document.body.appendChild(heading);

		let links = document.createElement("a");
		links.href = apiData.records[i].fields.Image;
		//These links could come from different sources if you have a corresponding column
		document.body.appendChild(links);
		
		let image = document.createElement("img");
		image.src = apiData.records[i].fields.Bottle;
		image.height = 200;
		links.appendChild(image);

	}


}*/

let popupBody = document.getElementById("popup_body");

let popupHeader = document.getElementById("popup_header");

async function main(){
	apiData = await getData(apiURL);
	console.log(apiData);

	for(let i = 0; i < apiData.records.length; i++){
		let name = apiData.records[i].fields.City;
		console.log(name);
		let heading = document.createElement("button");
		heading.innerHTML = name;
		document.body.appendChild(heading);


		//popup header
		heading.addEventListener('click', ()=>{
			City();
			let cityName = apiData.records[i].fields.City;
			console.log(cityName);
			popupHeader.innerHTML = cityName; 
			});
		
		
		
		//popup body
		heading.addEventListener('click', ()=>{ info();
		let rainAmount = apiData.records[i].fields.Precipitation;
		console.log(rainAmount);
		popupBody.innerHTML = rainAmount;})

		//image
/*		heading.addEventListener('click', ()=>{ images()})
		let popupImage = document.getElementById("popup_image");
		let imageRef = apiData.records[i].fields.Measure;
		console.log(imageRef);
		popupBody.innerHTML = imageRef;*/

		//let links = document.createElement("img");
		//links.href = apiData.records[i].fields.Image;
		//These links could come from different sources if you have a corresponding column
		//document.body.appendChild(links);
		
	}


}



main();
/*popup function*/
function City(){
	let popupBody = document.getElementById("popup_header");
	popupBody.classList.toggle('show');
}

function info(){
	let popupBody = document.getElementById("popup_body");
	popupBody.classList.toggle('show');
}

function images(){
	let popupBody = document.getElementById("popup_image");
	popupBody.classList.toggle('show');
}

//create paragraph/headings for all the names

/*records
	0, 1, 2,... 8
	createdTime, fields, id
					Name, Description...*/




