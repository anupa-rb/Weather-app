import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMagnifyingGlassLocation,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import clear from "../assets/clear.png";
import cloudy from "../assets/cloudy.png";
import partlySunny from "../assets/partlySunny.png";
import thunder from "../assets/thunder.png";

const Weather = () => {
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
        <div>
        <div className="col-h">Humidity 57%</div>
        <div className="col-s">Wind Speed 6.8km/h</div>
        </div></div>
    </>
  );
};
export default Weather;
