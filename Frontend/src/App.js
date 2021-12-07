import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css"

import FormularioUser from './components/FormularioUser'
import Navigation from './components/Navbar'
import UserList from './components/GestionUsuario'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path="/" component={<FormularioUser/>}/>
        <Route exact path="/GestionUsuario" component={<UserList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
