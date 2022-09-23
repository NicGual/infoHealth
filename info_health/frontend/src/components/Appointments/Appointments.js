import React, {useState} from "react";
import TableAppointment from "../TableAppointment/TableAppointment";
import '../TableAppointment/TableAppointment.css';

const Appointments = () => {
    const citas = [

        {
            fecha: ' 3 de agosto 2022',
            detalles: [
                {
                    hora: '1:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                },
                {
                    hora: '2:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                },
                {
                    hora: '3:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                }
            ]
        },
        {
            fecha: ' 4 de agosto 2022',
            detalles: [
                {
                    hora: '1:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                },
                {
                    hora: '2:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                },
                {
                    hora: '3:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                }
            ]
        },
        {
            fecha: ' 5 de agosto 2022',
            detalles: [
                {
                    hora: '1:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                },
                {
                    hora: '2:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                },
                {
                    hora: '3:00',
                    doctor: 'nicolas gualteros',
                    procedimiento: 'medicina general'
                }
            ]
        }


    ]
    const [results,setResults] = useState();
    const search = () => {
        setResults(citas)
    }
    return (
        <>
            <div className="container w-90">
                <div className="pt-3 row">
                    <div className="col-12 text-start">
                        <h2>Asignacion De Citas Para Laboratorio</h2>
                    </div>
                </div>
                <div className="pt-3 row">
                    <div className="col-xs-12 col-md-4 col-12  mb-3 fs-4">
                        <label className='mb-2 text-capitalize' for='examen' >Seleccione tipo de Examen</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example" id='examen'>
                            <option selected>seleccione el tipo de examen</option>
                            <option value="Ácido Metilmalónico">Ácido Metilmalónico</option>                           
                        </select>
                    </div>
                    <div className="col-xs-12 col-md-3 col-12 mb-3 fs-4">
                        <label className='mb-2 text-capitalize' for='examen' >Médico</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example" id='examen'>
                            <option selected>Seleccione su medico</option>
                            <option value="Nicolas Gualteros Herrera">Nicolas Gualteros Herrera</option>                            
                        </select>
                    </div>
                    <div className="col-xs-12 col-md-3 col-12 mb-3 fs-4">
                        <label for="fechaCita" className="mb-2 text-capitalize">Fecha de cita</label>
                        <input
                            type="date"
                            className="form-control form-control-sm bg-light mt-0"
                            id="fechaCita"
                            name="fecha_cita"
                            placeholder="Fecha"
                        />
                    </div>
                    
                    <div className="col-xs-12 col-md-2 col-12 mb-3 fs-4 d-flex align-items-end">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type="button" onClick={search}>Buscar</button>
                            
                        </div>
                    </div>
                </div>
                {results ? <TableAppointment citas={results} /> : ''}
            </div>
        </>
    )
}
export default Appointments