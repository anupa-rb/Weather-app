import "./Weather.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import clear from "../assets/clear.png";
import cloudy from "../assets/cloudy.png";
import partlySunny from "../assets/partlySunny.png";
import thunder from "../assets/thunder.png";
import { useEffect } from "react";

const Weather = () => {
  const search = async (city_name) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`
      );
      const res= await fetch(
        `api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${apiKey}`
      );
      console.log(res);
      console.log("Hello");
      console.log(response);
    } catch (error) {}
  };
  useEffect(() => {
    search("London");
  }, []);
  return (
    <>
      <div className="weather">
        <div className="search-bar">
          <input
            type="text"
            placeholder="search"
            style={{ backgroundColor: "white" }}
          ></input>
          <button className="btn">
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          </button>
        </div>
        <img src={clear} alt=""></img>
        <p className="temp">16°C</p>
        <p className="location">London</p>
        <div className="weather-data">
          <div className="col">
            <span> Humidity</span>
            <br /> 57%
          </div>
          <div className="col">
            <span> Wind Speed</span>
            <br /> 6.8km/h
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
