import {useEffect, useState} from "react";
import './App.css';
const { DateTime } = require("luxon");

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [temp, setTemp] = useState(null);

  const getWeatherData = async () => {
    if (locationData) {
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${locationData[0]}&longitude=${locationData[1]}&hourly=temperature_2m,weathercode`);
    const weatherData = await weatherResponse.json();
    const currentDateTime = DateTime.now().toFormat("yyyy-MM-dd'T'HH:'00'");
    const times = weatherData.hourly.time;
    const index = times.findIndex((time)=>time===currentDateTime);
    const currentCode = weatherData.hourly.weathercode[index];
    const currentTemp = weatherData.hourly.temperature_2m[index];
    setTemp(currentTemp)
    const weatherCodeResponse = await fetch(`http://localhost:9000/weather-codes/${currentCode}`);
    const weatherCodesData = await weatherCodeResponse.json();
    setWeatherData(weatherCodesData.iconDay);
    // console.log(weatherCodesData);
  }}

  if (!locationData) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const location = [];
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    location.push(lat);
    location.push(lon)
    setLocationData(location);
  })};
  


  useEffect( () => {
    getWeatherData()
  }, [locationData])

  return (
    <div className="App">
      <header className="App-header">
      {weatherData ? 
        <>
          <h1>Current: {temp}°C</h1>
          <img src={weatherData}></img>
        </>
        : <p>Loading</p>
        }
      </header>
    </div>
  );
}

export default App;
