import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">CodeWarriors</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/Users">Usuarios</Link>
                            </li>
                            
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/Proyectos">Proyectos</Link>
                            </li> */}                            

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Proyectos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="nav-link" to="/projects">Proyectos</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="/projects/register">Registro</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/enrollments">Inscripciones</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/advances">Avances</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/students">Estudiantes</Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navigation;