import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css"


import Login from './components/Login/Login'
import RegisterForm from "./components/Users/UserForm";
import UserList from './components/Users/UserList'

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Register" element={<RegisterForm/>}/>
        <Route exact path="/Users" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
