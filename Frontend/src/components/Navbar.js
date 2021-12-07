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
                        <Link className="nav-link" to="/GestionUsuario">Usuarios</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/Proyectos">Proyectos</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/Avances">Avances</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/Estudiantes">Estudiantes</Link>
                    </li>
                    
                    </ul>
                </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navigation;