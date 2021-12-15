import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Graphql
import { useQuery, useMutation } from '@apollo/react-hooks';
import { POST_PROJECT } from "../../graphql/Projects/mutations"

import Navigation from '../Navbar';
import Swal from 'sweetalert2';

import { EstadoProyecto, FaseProyecto } from '../../utils/enums';

const ProjectRegister = () => {

    const [state, setState] = useState({
        project_id: "",
        project_name: "",
        general_objetives: "",
        specific_objetives: "",
        budget: 0,
        start_date: new Date(),
        end_date: new Date(),
        leader_name: "",
        leader_cc: "",
        project_status: "INACTIVO",
        project_stage: ""
    })

    const onChangeHandler = e => {
        const { name, value } = e.target;        
        if (name === "budget"){
            setState(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }));
        }else{
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const onChangeStatus = e => {
        setState(prevState => ({
            ...prevState,
            "project_status": e.target.value
        }));
    }

    const onChangeStage = e => {
        setState(prevState => ({
            ...prevState,
            "project_stage": e.target.value
        }));
    }
    
    // Create Project
    const [createProject, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(POST_PROJECT);

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000
    });

    useEffect(() => {
        if (mutationData) {
            Toast.fire({
                position: 'top-end',
                title: 'Proyecto creado exitosamente!',
                icon: 'success',
                showConfirmButton: false,
            })
        }
        if (mutationError) {
            Toast.fire({
                position: 'top-end',
                title: 'Error creando',
                icon: 'error',
                showConfirmButton: false,
            })
        }
    }, [mutationError, mutationData]);

    const SubmitForm = (e) => {
        console.log(state)
        e.preventDefault();
        createProject({
            variables: { campos: { ...state } },
        });
    }

    return (
        <>
            <Navigation />            
            <div className="container mt-4">
                <center><h1>Registrar Producto</h1></center>


                {/* <form
                    onSubmit={SubmitForm}
                    className='flex flex-col items-center justify-center'
                > */}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">ID Proyecto</span>
                        </div>
                        <input
                            type="text"
                            name="project_id"
                            className="form-control"
                            aria-label="ID Proyecto"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={state.project_id}
                            onChange={(e)=>onChangeHandler(e)}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre Proyecto</span>
                        </div>
                        <input
                            type="text"
                            name="project_name"
                            className="form-control"
                            aria-label="Nombre Proyecto"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={state.project_name}
                            onChange={(e)=>onChangeHandler(e)}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Objetivo general</span>
                        </div>
                        <textarea
                            className="form-control"
                            name="general_objetives"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            defaultValue={state.general_objetives}
                            onChange={onChangeHandler}
                        >
                        </textarea>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Objetivos específicos</span>
                        </div>
                        <textarea
                            className="form-control"
                            name="specific_objetives"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            defaultValue={state.specific_objetives}
                            onChange={onChangeHandler}
                        >
                        </textarea>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Presupuesto</span>
                        </div>
                        <input
                            type="number"
                            name="budget"
                            className="form-control"
                            aria-label="Presupuesto"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={parseInt(state.budget)}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Fecha inicio</span>
                        </div>
                        <input
                            type="date"
                            name="start_date"
                            className="form-control"
                            aria-label="Fecha inicio"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={state.start_date}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Fecha fin</span>
                        </div>
                        <input
                            type="date"
                            name="end_date"
                            className="form-control"
                            aria-label="Fecha fin"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={state.end_date}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre Lider</span>
                        </div>
                        <input
                            type="text"
                            name="leader_name"
                            className="form-control"
                            aria-label="Nombre Lider"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={state.leader_name}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">CC Lider</span>
                        </div>
                        <input
                            type="text"
                            name="leader_cc"
                            className="form-control"
                            aria-label="CC Lider"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={state.leader_cc}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Estado</span>
                        </div>
                        <select className="form-select"
                            // value={element.status}
                            defaultValue={state.project_status}
                            onChange={e => onChangeStatus(e)}
                        >
                            {
                                Object.keys(EstadoProyecto).map(estado => {
                                    return <option key={estado} value={estado}>{EstadoProyecto[estado]}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend col-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Fase</span>
                        </div>
                        <select className="form-select"
                            // value={element.status}
                            defaultValue={state.project_stage}
                            onChange={e => onChangeStage(e)}
                        >
                            {
                                Object.keys(FaseProyecto).map(estado => {
                                    return <option key={estado} value={estado}>{FaseProyecto[estado]}</option>
                                })
                            }
                        </select>
                    </div>                    

                    <div className="text-center mt-5 mb-5">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={SubmitForm}
                        >
                            Guardar
                        </button>                        
                    </div>

                {/* </form> */}


                {/* <div className="text-center mt-5">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={()=>{
                                console.log(state)
                            }}
                        >
                            check state
                        </button>                        
                </div> */}

            </div>
        </>
    )

}

export default ProjectRegister