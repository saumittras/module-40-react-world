import { useState } from "react";
import "./Country.css";
const Country = ({ country, handlevisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;
  console.log(country);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  console.log(handlevisitedCountry);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Country Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handlevisitedCountry(country)}>
        Marked Visited
      </button>{" "}
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited this country. " : "I want to visit"}
    </div>
  );
};

export default Country;
