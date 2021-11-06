import { Fragment, useState, useEffect } from "react";
import Pais from "./Pais";

function Main() {
  const [infoPaises, setInfoPaises] = useState([]);

  useEffect(() => {
    const url = "https://covid-api.mmediagroup.fr/v1/cases";

    const fetchData = async () => {
      try {
        let lista = [];
        let sixMostCases = [];

        const response = await fetch(url);
        const json = await response.json();

        lista = getListOfCountries(json);
        sixMostCases = getSixMostCases(lista);

        setInfoPaises(sixMostCases);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

    console.log(infoPaises);
  }, []);

  function getSixMostCases(lista) {
    let ordenada = lista.sort(
      (a, b) => parseFloat(a.confirmed) - parseFloat(b.confirmed)
    );

    return ordenada.slice(190, lista.length).reverse().slice(1, 7);
  }

  function getListOfCountries(json) {
    let lista = [];
    var newArrayDataOfOjbect = Object.values(json);

    newArrayDataOfOjbect.forEach((element) => {
      var item = element.All;

      lista.push(item);
    });

    return lista;
  }

  return (
    <Fragment>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Bienvenido a InfoCovidAR</h1>
            <p>
              En este sitio encontraras informacion relevante respecto al estado
              epidemico de la argentina y el mundo
            </p>
            <p></p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {infoPaises.map((pais) => (
              <Pais key={pais.iso} pais={pais} />
            ))}
          </div>
          <hr></hr>
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
