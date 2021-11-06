import { Fragment } from "react";

function Footer() {
  const anio = new Date().getFullYear();
  return (
    <Fragment>
      <footer className="container">
        <p>&copy; InfoCovidAR {anio} </p>
      </footer>
    </Fragment>
  );
}

export default Footer;
