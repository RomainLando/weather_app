import {useEffect, useState} from "react";
import './App.css';

function App() {

  const [weatherData, setWeatherData] = useState(null)

  const getWeatherData = async () => {
    const response = await fetch("http://localhost:9000/edinburgh");
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  }


  useEffect( () => {
    getWeatherData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {weatherData ? 
        <h1>Current: {weatherData.weather}</h1> : <p>Loading</p>}
      </header>
    </div>
  );
}

export default App;
