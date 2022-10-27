import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import ProductsList from "./ProductsList";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

/* 
* Route va primero por lo visto
? Detalle IMPORTANTE: Que es un Elemento y que un Componente
1) Componente: El componente es la funcion en si , osea Navbar
2) Elemento: El elemento que < Navbar /> ya que este "Elemento" lo podemos usar cuantas veces queramos, lo podemos duplicar.

* Luego se envuelven esos Route dentro de Routes para que todo funcione correctamente.

*/

function App() {

  return (
    <React.Fragment>
      <>

        <Navbar />

        <div className="contenedorPrincipal">
          <Routes>
            <Route path="/" element={ <Dashboard/> } />
            <Route path="/products" element={ <ProductsList/> } />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
        </div>

        <Footer />

      </>
    </React.Fragment>
  );
}

export default App;