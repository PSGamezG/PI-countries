import "./App.css";
import NavBar from "./Components2/NavBar/NavBar";
import { useState } from "react";
import axios from "axios";

import { Home, Landing, Detail, Form } from "./Views";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);

  const { pathname } = useLocation();

  const onSearch = async (name) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/countries/name?name=${name}`
      );

      if (data.length > 0) {
        setCountries((country) => [...country, data]);
        console.log("aparecio el pais!");
      } else {
        window.alert("No countries found");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="App">
        {pathname !== "/" && <NavBar onSearch={onSearch} />}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/countries/:ID" element={<Detail />} />
          <Route path="/create" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// renderizando home y landing para que se muestre
//Con BrowserRouter podremos indicar en que ruta queremos que se muestre cada componente
//con la opcion render={()=> <Componente/>} podemos pasarle props al renderizarlo, investigar

//NOTAS: QUE EN EL LANDING SE MUESTRE EL GO PARA HOME, EN EL HOME EL BOTON DE FORM/CREATE
//QUE EN EL FORM APAREZCA SOLO EL DE HOME
//EL DETAIL LLEGA A TRAVES DE TOCAR LA CARTA
