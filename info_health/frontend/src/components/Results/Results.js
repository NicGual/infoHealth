import React from "react";
import './Results.css'

const Results = () => {

    return (
        <>

            <div className="container w-90">
                <h2 className="p-3">Consulta de Resultados</h2>
                <section id="date-search" className="pt-3 row d-flex align-items-center justify-content-center">
                    {/* <div className="col-1 d-flex justify-content-end">Desde</div>
                    <input className="search-box col-xs-12 col-md-4 col-12"  type="text" placeholder="ingrese fecha"/>
                    <div className="col-1 d-flex justify-content-end">Hasta</div>
                    <input className="search-box col-xs-12 col-md-4 col-12" type="text" placeholder="ingrese fecha"/> */}
                    <div className="col-xs-6 col-md-1 col-12 mb-3 fs-4">
                        <label className='mb-2 text-capitalize' for='examen' >Desde</label>
                    </div>
                    <div className="col-xs-6 col-md-4 col-12 mb-3 fs-4">
                        <input className="search-box form-control" type="text" placeholder="ingrese fecha" />
                    </div>
                    <div className="col-xs-6 col-md-1 col-12 mb-3 fs-4">
                        <label className='mb-2 text-capitalize' for='examen' >Hasta</label>
                    </div>
                    <div className="col-xs-6 col-md-4 col-12 mb-3 fs-4">
                        <input className="search-box form-control" type="text" placeholder="ingrese fecha" />
                    </div>
                    <div className="col-xs-12 col-md-2 col-12 mb-3 fs-4 d-flex align-items-end">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type="button" >Buscar</button>
                        </div>
                    </div>
                </section>
                <div className="results-username row d-flex align-items-center ms-2 me-2">
                    <h3 className="ms-3">Nicolas Gualteros Herrera</h3>
                </div>
                <div className="results-row row d-flex align-items-center  ms-2 mt-2 me-2 mb-4">
                    <div className="col-xs-6 col-md-5 col-6 ms-4 mb-3 fs-4">
                        <h4 className="fw-bold mt-2"> Prueba Ácido Metilmalónico </h4>
                        <h6>Atendido por : Nicolás Gualteros Herrera</h6>
                    </div>
                    <div className="col-xs-5 col-md-2 col-5 mb-3 fs-4">
                        <h4 className="d-flex justify-content-center fw-bold">Fecha</h4>
                        <h6 className="d-flex justify-content-center">02/08/2022</h6>
                    </div>
                    <div className="col-xs-12 col-md-4 col-12 d-flex align-items-center justify-content-end mb-3 fs-4">
                        <button className="button-results"> <h4 className="p-1">Ver Resultado</h4></button>
                    </div>

                </div>
                <div className="results-row row d-flex align-items-center  ms-2 mt-2 me-2 mb-4">
                    <div className="col-xs-6 col-md-5 col-6 ms-4 mb-3 fs-4">
                        <h4 className="fw-bold mt-2"> Prueba Ácido Metilmalónico </h4>
                        <h6>Atendido por : Nicolás Gualteros Herrera</h6>
                    </div>
                    <div className="col-xs-5 col-md-2 col-5 mb-3 fs-4">
                        <h4 className="d-flex justify-content-center fw-bold">Fecha</h4>
                        <h6 className="d-flex justify-content-center">02/08/2022</h6>
                    </div>
                    <div className="col-xs-12 col-md-4 col-12 d-flex align-items-center justify-content-end mb-3 fs-4">
                        <button className="button-results"> <h4 className="p-1">Ver Resultado</h4></button>
                    </div>

                </div>
                <div className="results-row row d-flex align-items-center  ms-2 mt-2 me-2 mb-4">
                    <div className="col-xs-6 col-md-5 col-6 ms-4 mb-3 fs-4">
                        <h4 className="fw-bold mt-2"> Prueba Ácido Metilmalónico </h4>
                        <h6>Atendido por : Nicolás Gualteros Herrera</h6>
                    </div>
                    <div className="col-xs-5 col-md-2 col-5 mb-3 fs-4">
                        <h4 className="d-flex justify-content-center fw-bold">Fecha</h4>
                        <h6 className="d-flex justify-content-center">02/08/2022</h6>
                    </div>
                    <div className="col-xs-12 col-md-4 col-12 d-flex align-items-center justify-content-end mb-3 fs-4">
                        <button className="button-results"> <h4 className="p-1">Ver Resultado</h4></button>
                    </div>

                </div>
            </div>
        </>

    )
}
export default Results