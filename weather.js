// async function fetchWeather() {
//   const apiKey = "286adccf2c4e9bc9c89caedb260edaa9"; 
//   const city = document.getElementById("city-input").value;

//   const response = await fetch(
//     `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
//   );
//   const data = await response.json();
//   console.log(data);
//   if (data.error) {
//     alert("Error: " + data.error.info);
//     return;
//   }

     async function fetchWeather() {
              const apiKey = "f2647d33be8d28e7a51e5d8098b6ca66"; 
              const city = document.getElementById("city-input").value;

              if (!city) {
                  alert("Please enter a city name!");
                  return;
              }

              const response = await fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`);
              const data = await response.json();
console.log(data);
              if (data.error) {
                  alert("Error: " + data.error.info);
                  return;
              }

  document.getElementById("location").innerText = `${data.location.name}, ${data.location.country}`;
  document.getElementById("temperature").innerText =data.current.temperature + "°C";
//   document.getElementById("temperature").innerText = `${data.current.temperature}°C`; this is an alternative to the above
  document.getElementById("condition").innerText =data.current.weather_descriptions[0];
  document.getElementById("wind").innerText = data.current.wind_speed;
  document.getElementById("precip").innerText = data.current.precip;
  document.getElementById("humidity").innerText = data.current.humidity;
  document.getElementById("pressure").innerText = data.current.pressure;
  document.getElementById("weather-icon").src = data.current.weather_icons[0];

  const forecastData = [
    {day: "MON",temp: data.current.temperature ,icon: data.current.weather_icons[0]},
    {day: "TUE",temp: data.current.temperature ,icon: data.current.weather_icons[0],},
    {day: "WED",temp: data.current.temperature ,icon: data.current.weather_icons[0],},
    {day: "THU",temp: data.current.temperature ,icon: data.current.weather_icons[0],},
    {day: "FRI",temp: data.current.temperature ,icon: data.current.weather_icons[0],},
    

    
  ];

  let weatherHTML = "";
  forecastData.forEach((day) => {
    weatherHTML += `
                    <div class="forecast-day">
                        <p>${day.day}</p>
                        <img src="${day.icon}" width="40">
                        <p>${day.temp}°C</p>
                    </div>
                `;
  });
  document.getElementById("forecast").innerHTML = weatherHTML;
}


fetchWeather();
