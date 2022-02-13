import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountryList() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setCountry(data);
    }
  }, []);

  return (
    <div className="CountryList">
      <nav></nav>

      {country && (
        <div>
          {country.map((country, index) => (
            <div key={index} className="card">
              <Link to="/">
                <div className="flag">
                  <img src={country.flags.png} alt="flag" />
                </div>
                <div className="details">
                  <span className="title">{country.name}</span>
                  <ul>
                    <li>
                      <span>population: </span>
                      {country.population}
                    </li>
                    <li>
                      <span>region: </span>
                      {country.region}
                    </li>
                    <li>
                      <span>capital: </span>
                      {country.capital}
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountryList;
