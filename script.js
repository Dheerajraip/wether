document.getElementById("fetchWeather").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  const apiKey = "bd5e378503939ddaee76f12ad7a97608";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weatherResult = document.getElementById("weatherResult");
      weatherResult.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
    })
    .catch((error) => {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p>${error.message}</p>`;
    });
});
