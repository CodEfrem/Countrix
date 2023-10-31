import React from "react";

function CountryCard({ country }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {country.name.common} {country.flag ? country.flag : ""}
        </h5>
        <p className="card-text">
          Capitale: {country.capital ? country.capital : "N/A"}
        </p>
        <p className="card-text">
          Population: {country.population.toLocaleString("fr-FR")}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
