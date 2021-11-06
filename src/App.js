import { Fragment, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main"

function App() {
  
  return (
    <Fragment>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
