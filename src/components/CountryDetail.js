import { Link, useLocation } from "react-router-dom";

function CountryDetail() {
  const location = useLocation();
  const { from } = location.state;
  return (
    <div className="CountryDetail">
      <Link to="/">Back</Link>
      <div className="flag">
        <img src={from.flags.png} alt="flag" />
      </div>
      <div className="right">
        <h3>{from.name}</h3>
        <ul>
          <li>
            <span>native name: </span>
            {from.nativeName}
          </li>
          <li>
            <span>population: </span>
            {from.population}
          </li>
          <li>
            <span>region: </span>
            {from.region}
          </li>
          <li>
            <span>sub region: </span>
            {from.subregion}
          </li>
          <li>
            <span>capital: </span>
            {from.capital}
          </li>
          <li>
            <span>top level domain: </span>
            {from.topLevelDomain}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryDetail;
