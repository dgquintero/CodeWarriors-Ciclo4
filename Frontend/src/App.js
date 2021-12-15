import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min.js"
import "bootswatch/dist/lux/bootstrap.min.css"

import Login from './components/Login/Login'
import RegisterForm from "./components/Users/UserForm";
import UserList from './components/Users/UserList'
import ProjectList from './components/Projects/ProjectList'
import StudentList from './components/Users/StudentList'
import ProjectRegister from './components/Projects/ProjectRegister'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Register" element={<RegisterForm/>}/>
        <Route exact path="/Users" element={<UserList/>}/>
        <Route path="/students" element={<StudentList/>}/>
        <Route exact path="/projects" element={<ProjectList />} />
        <Route path="/projects/register" element={<ProjectRegister/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
