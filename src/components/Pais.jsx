import { Fragment } from "react";

function Pais({ pais }) {
  const {
    confirmed,
    recovered,
    deaths,
    country,
    population,
    continent,
    abbreviation,
    location,
    iso,
    capital_city,
    updated,
  } = pais;

  return (
    <Fragment>
      <div className="col-md-4">
        <h2>{country}</h2>
        <p>Cantidad de casos registrados {confirmed}</p>
        <p>Actualizado al {updated}</p>
      </div>
    </Fragment>
  );
}

export default Pais;
