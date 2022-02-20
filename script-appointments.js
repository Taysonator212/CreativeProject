function SelectOption(buttonSelected) {
  if(buttonSelected.data == "unselected"){
    buttonSelected.style.backgroundColor = "white";
    buttonSelected.data = "unselected";
  }
  else{
    buttonSelected.style.backgroundColor = "DarkGrey";
    buttonSelected.data = "selected";
  }
}



document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=99432b7e058537fc567d6847fb35c63f";
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += '<h2>Current Weather in ' + json.name + "</h2> <div class = 'current-weather'> ";

    results += '<p class = "temperature"> <strong>Current Temperature:  </strong>' + json.main.temp + " &deg;F"
    results += "<br><strong> Feels Like: </strong>" + json.main.feels_like + " &deg;F"
    results += "<br><strong> High: </strong>" + json.main.temp_max + " &deg;F"
    results += "<br> <strong>Low: </strong>" +json.main.temp_min + " &deg;F"
    results += "<br><strong>Cloudiness Percent: </strong>" + json.clouds.all + " %"
    results += "<br><strong> Description: </strong>"
    for (let i=0; i < json.weather.length; i++) {
       results += json.weather[i].description
       if (i !== json.weather.length - 1)
        results += ", "
    }
results += '</p></div> <div class="sunset-sunrise">'

    var sec = json.sys.sunrise;
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();

    results += '<p><strong>Sunrise Time:  </strong>' + date + timestr + "</p>"
    //results += '<img src="/images/sunrise.jpg" width=50%> </div>'
    results += '<div class="sunset-sunrise">'

    var sec = json.sys.sunset;
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();

    results += '<p><strong>Sunset Time:  </strong>' + date + timestr + "</p>"
    //results += '<img src="/images/sunset2.jpg" width=50%> </div>'
    document.getElementById("weatherResults").innerHTML = results;
  });
});
//.catch(error => alert("Invalid City. Please enter a valid United States City"));

  /*const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=1e166232cd4f05e27c77d00c3fbf6c33";
  fetch(url2)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
      let forecast = "";
      forecast += '<h2>5 Day Forecast for ' + json.city.name + ' in 3 Hour Increments</h2>'
      for (let i=0; i < json.list.length; i++) {
        if (i % 2 == 0) {
          forecast += "<div class = 'tuple'>"
        }
        forecast += "<div class = 'forecast-box'><h4>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h4>";
        forecast += '<div class = "stuff"><img class = "icon2" src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
        forecast += "<p class = 'temperature2'><strong>Average Temperature: </strong>" + json.list[i].main.temp
        forecast += "<br><strong> Will Feel Like: </strong>" + json.list[i].main.feels_like + " &deg;F"
        forecast += "<br><strong> High: </strong>" + json.list[i].main.temp_max + " &deg;F"
        forecast += "<br> <strong>Low: </strong>" +json.list[i].main.temp_min + " &deg;F"
        forecast += "<br><strong> Description: </strong>"
        for (let i=0; i < json.list[i].weather.length; i++) {
           forecast += json.list[i].weather[i].description
           if (i !== json.list[i].weather.length - 1)
            forecast += ", "
        }
        forecast += "<br><strong>Chance of Rain: </strong>" + (json.list[i].pop * 100) + "%"
        forecast += "</p><p class = 'temperature2'><strong>Pressure: </strong>" + json.list[i].main.pressure + " hPa"
        forecast += "<br><strong>Humidity: </strong>" + json.list[i].main.humidity + "%"
        forecast += "<br><strong>Visibility: </strong>" + json.list[i].visibility + " meters"
        forecast += "<br><strong>Wind Speed: </strong>" + json.list[i].wind.speed + " mph"
        forecast += "<br><strong>Wind Degree: </strong>" + json.list[i].wind.deg + "&deg;"
        forecast += "<br><strong>Cloudiness Percent: </strong>" + json.list[i].clouds.all + " %"
        forecast += "</p></div></div>";
        if (i % 2 == 1) {
          forecast += "</div>"
        }
      }
      document.getElementById("forecastResults").innerHTML = forecast;
  });
});
*/






function logApt(){
  var numberOfPeople;
  if(document.getElementById("personalSession").data === "selected"){
    numberOfPeople = document.getElementById("personalSession").value;
  }
  else if(document.getElementById("coupleSession").data === "selected"){
    numberOfPeople = document.getElementById("coupleSession").value;
  }
  else if(document.getElementById("groupSession").data === "selected"){
    numberOfPeople = document.getElementById("groupSession").value;
  }

  var shootTime;
  if(document.getElementById("morningSession").data === "selected"){
    shootTime = document.getElementById("morningSession").value;
  }
  else if(document.getElementById("afternoonSession").data === "selected"){
    shootTime = document.getElementById("afternoonSession").value;
  }
  else if(document.getElementById("eveningSession").data === "selected"){
    shootTime = document.getElementById("eveningSession").value;
  }

  var shootType;
  if(document.getElementById("senior").data === "selected"){
    shootType = document.getElementById("senior").value;
  }
  else if(document.getElementById("engagement").data === "selected"){
    shootType = document.getElementById("engagement").value;
  }
  else if(document.getElementById("portrait").data === "selected"){
    shootType = document.getElementById("portrait").value;
  }

  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let preference = document.getElementById("contactMethod").value;
  let apt = numberOfPeople + " " + shootTime + " " + shootType + " " + email + " " + phone + " " + preference;
  console.log(apt);
}
