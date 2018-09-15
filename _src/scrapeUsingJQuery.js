console.log("---> Running");

const curl = require("curl");
const jsdom = require("jsdom");
const url = "http://www.imdb.com/list/ls004489992/";

curl.get(url, null, (err,resp,body)=>{
	if(resp.statusCode == 200){
		parseData(body);
	}
	else{
		//some error handling
		console.log("error while fetching url");
	}
});


function parseData(html){
	const {JSDOM} = jsdom;
	const dom = new JSDOM(html);
   	const $ = (require('jquery'))(dom.window);

   	//let's start extracting the data
	var items = $(".list_item");
	for(var i = 0; i < items.length; i++){
		var innerInfo = $(items[i]).children('.info');
		var movieName = $($(innerInfo).find('a')[0]).html();
		var movieYear = $($(innerInfo).find('.year_type')[0]).html();
		console.log(i + " -> " + movieYear + ":" + movieName);
	}      	
}