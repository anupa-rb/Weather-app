import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMagnifyingGlassLocation,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import clear from "../assets/clear.png";

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
<div className="image">
  <img src={clear} alt=""></img>
</div>
      </div>
    </>
  );
};
export default Weather;
