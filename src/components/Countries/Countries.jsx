import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Counteries.css";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [counteris, setCounteries] = useState([]);
  useEffect(() => {
    fetch(url).then((res) => res.json().then((data) => setCounteries(data)));
  }, []);
  return (
    <div>
      <h3>Countries: {counteris.length}</h3>
      <div className="country-container">
        {counteris.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
