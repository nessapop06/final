
function getWeather(data) {
$.getJSON("http://api.openweathermap.org/data/2.5/weather",
{
q : "brooklyn",
appid : "84bee75ccc48d73cd18de3a8c2d85c8e",
units: "imperial",

},
function (data){
	// do this stuff once we have data
		$("#cityName").html( data.name);
		$("#temp").html(data.main.temp + " F");
		$("#weather").html(data.weather.id);

		var weathericon = "http://openweathermap.org/img/w/"+ data.weather[0].icon +".png";
		$("#icon").attr("src", weathericon);

});
}

$("#changeCity").click ( function(){
	var newCity = $("#inputCity").val()
	getWeather(newCity)
	

	});





//////

// function weatherCallback(data) {
// 	// do this stuff once we have data 
// 	console.log(data);
// }

// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=84bee75ccc48d73cd18de3a8c2d85c8e",
// {},
// weatherCallback);