import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import clear from "../assets/clear.png";
import cloudy from "../assets/cloudy.png";
import partlySunny from "../assets/partlySunny.png";
import rain from "../assets/rain.png";
import mist from "../assets/mist.png";
import thunder from "../assets/thunder.png";
import { useEffect, useRef, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();

  const allIcons = {
    "01d": clear,
    "02d": partlySunny,
    "03d": cloudy,
    "04d": cloudy,
    "09d": rain,
    "10d": rain,
    "11d": thunder,
    //"13d" : snow,
    "50d": mist,
  };
  const search = async (city_name) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {}
  };
  useEffect(() => {
    search("Mumbai");
  }, []);
  return (
    <>
      <div className="weather">
        <div className="search-bar">
          <input
            type="text"
            placeholder="search"
            ref={inputRef}
            style={{ backgroundColor: "white" }}
          ></input>
          <button
            className="btn"
            onClick={() => {
              search(inputRef.current.value);
            }}
          >
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          </button>
        </div>
        <img src={weatherData.icon} alt=""></img>
        <p className="temp">{weatherData.temperature}°C</p>
        <p className="location">{weatherData.location}</p>
        <div className="weather-data">
          <div className="col">
            <span> Humidity</span>
            <br /> {weatherData.humidity}%
          </div>
          <div className="col">
            <span> Wind Speed</span>
            <br /> {weatherData.windSpeed}km/h
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
