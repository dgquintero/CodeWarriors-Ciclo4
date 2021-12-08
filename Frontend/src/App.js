import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css"


import Login from './components/Login'
import UserList from './components/UserList'

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Users" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
