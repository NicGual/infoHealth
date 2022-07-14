import React from "react";

const Appointments = () => {

    return (
        <>
            <div className="container w-90">
                <div className="pt-3 row">
                    <div className="col-12 text-start">
                        <h2>Asignacion De Citas Para Laboratorio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mb-3">
                        <label className='mb-2 text-capitalize' for='examen' >Seleccione tipo de Examen</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example" id='examen'>
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label for="fechaCita" className="mb-2 text-capitalize">Fecha de cita</label>
                        <input
                            type="date"
                            className="form-control form-control-sm bg-light mt-0"
                            id="fechaCita"
                            name="fecha_cita"
                            placeholder="Fecha"                                                        
                        />
                    </div>
                    <div className="col-3 mb-3">
                        <label className='mb-2 text-capitalize' for='examen' >Seleccione tipo de Examen</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example" id='examen'>
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-3 mb-3">
                        <button className="btn btn-primary  my-auto mx-auto">Buscar</button>
                    </div>
                </div>
                <div className="row bg-light rounded-pill">
                    <div className="col-2 p-3">
                        <h2>hora</h2>
                    </div>
                    <div className="col-5 p-3">
                        <h2>doctor</h2>
                    </div>
                    <div className="col-3 p-3">
                        <h2>procedimiento</h2>
                    </div>
                    <div className="col-2 p-3">
                        <button className="btn btn-primary ms-4 my-auto mx-auto">asignar</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Appointments