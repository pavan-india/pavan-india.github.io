function init(input) {
	token.id = config.API_KEY;

	//var input = $(inputId);
	var timer = null;
	//var output = $(outputId);

	/* Debounce */
	if (timer) clearTimeout(timer);
	timer = setTimeout(function(){
		search(input, "result-search");
	},250);


function search(keyword, output) {
	var info = token()=="demo"?"(based on demo token)":""
	//output.append($("<div/>").html("Loading..."))
	//output.append($("<div/>").addClass("cp-spinner cp-meter"))

	$.getJSON("http://api.waqi.info/search/?token="+config.API_KEY+"&keyword="+keyword,function(result){


		//var info = token()=="demo"?"(based on demo token)":""
		//output.html("<h2>Search results "+keyword+":</h2>")
		if (!result || (result.status!="ok")) {
			output.append("Sorry, something wrong happend: ")
			if (result.data) output.append($("<code>").html(result.data))
			return
		}

		if (result.data.length==0) {
			output.append("Sorry, there is no result for your query!")
			return
		}

		var table = $("<table/>").addClass("result")
		var out = document.getElementById(output);


		for(var i=0; i<result.data.length; i++){
			out.innerHTML += result.data[i].station.name + " AQI: " + result.data[i].aqi + "<br>";
		}
		//out.innerHTML += result.data[0].station.name + " AQI: " + result.data[0].aqi;
		//console.log(out);

/*
		out.appendChild(table)

		out.append($("<div/>").html("Click on any of the station to see the detailled AQI"))

		var stationInfo = $("<div/>")
		output.append(stationInfo)

		result.data.forEach(function(station,i){
			var tr = $("<tr>");
			tr.append($("<td>").html(station.station.name))
			tr.append($("<td>").html(colorize(station.aqi)))
			tr.append($("<td>").html(station.time.stime))
			tr.on("click",function(){
				showStation(station,stationInfo)
			})
			table.append(tr)
			if (i==0) showStation(station,stationInfo)
		})
		*/

	});
}




function token() {
	return $(token.id).val()||"demo";
}


}


document.addEventListener("DOMContentLoaded", function(event) {
    init("bangalore");
		console.log("loaded");
});

document.addEventListener("click", function(event) {
	console.log(event.clientX + ", "+ event.clientY);
})
