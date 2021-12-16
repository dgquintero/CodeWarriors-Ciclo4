import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min.js"
import "bootswatch/dist/lux/bootstrap.min.css"

import Login from './components/Login/Login'
import RegisterForm from "./components/Users/UserForm";
import UserList from './components/Users/UserList'
import StudentList from './components/Users/StudentList'
import ProjectRegister from './components/Projects/ProjectRegister'
import LeaderList from './components/Users/LeaderList'
import ProjectList from './components/Projects/ProjectList'
import ProjectUpdate from './components/Projects/ProjectUpdate'

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Register" element={<RegisterForm/>}/>
        <Route exact path="/Users" element={<UserList/>}/>
        <Route path="/students" element={<StudentList/>}/>
        <Route path="/projects/register" element={<ProjectRegister/>}/>
        <Route path="/projects" element={<LeaderList/>}/>
        <Route path="/projects/leader/:id" element={<ProjectList/>}/>
        <Route path="/projects/update/:id" element={<ProjectUpdate/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
