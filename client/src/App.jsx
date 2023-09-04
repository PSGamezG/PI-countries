import "./App.css";
import NavBar from "./Components2/NavBar/NavBar";

import { Home, Landing, Detail, Form } from "./Components";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="App">
        {pathname !== "/" && <NavBar />}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
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
