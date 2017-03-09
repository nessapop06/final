$.getJSON("http://api.openweathermap.org/data/2.5/weather",
{
q : "brooklyn",
appid : "84bee75ccc48d73cd18de3a8c2d85c8e",
units: "imperial",

},
function (data){
	// do this stuff once we have data
		$("#cityName").html( data.name);
		$("#temp").html(data.main.temp + "°F");
		$("#desc").html(data.weather[0].description+ " ");

		var weathericon = "images/"+ data.weather[0].icon +".svg";


		$("#icon").attr("src", weathericon);

});





