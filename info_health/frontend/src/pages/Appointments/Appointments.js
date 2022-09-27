import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TableAppointment from "../../components/TableAppointment/TableAppointment";
import useGetAppointmentData from "../../hooks/useGetAppointmentData";
import '../../components/TableAppointment/TableAppointment.css';

const Appointments = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [results, setResults] = useState();
    const [isEmpty, setIsEmpty] = useState(true);
    const getAppointmentData = useGetAppointmentData();


    const search = (citas) => {
        setResults(citas)
    }
    const onSubmit = async (e) => {
        const appointmentInformation = e
        console.log(appointmentInformation)
        let appointments = await getAppointmentData(appointmentInformation)
        console.log(appointments)
        console.log(appointments.length)
        if(!appointments.length==0){setIsEmpty(false)}
        console.log(isEmpty)
        search(appointments)
    }
    return (
        <>
            <div className="container w-90">
                <div className="pt-3 row">
                    <div className="col-12 text-start">
                        <h2>Asignacion De Citas Para Laboratorio</h2>
                    </div>
                </div>
                <form className="row pt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-xs-12 col-md-4 col-12  mb-3 fs-4">
                        <label className='mb-2 text-capitalize' for='examen' >Seleccione tipo de Examen</label>
                        <select class="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            id='examen'
                            name="tipo_examen"
                            {...register("tipo_examen", {
                                required: {
                                    value: false
                                }
                            })}
                        >
                            <option value="" selected>seleccione el tipo de examen</option>
                            <option value="Ácido Metilmalónico">Ácido Metilmalónico</option>
                        </select>
                    </div>
                    <div className="col-xs-12 col-md-3 col-12 mb-3 fs-4">
                        <label className='mb-2 text-capitalize' for='examen' >Médico</label>
                        <select class="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            id='examen'
                            name="medico_seleccionado"
                            {...register("medico_seleccionado", {
                                required: {
                                    value: false
                                }
                            })}
                        >
                            <option value="" selected>Seleccione su medico</option>
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
                            {...register("fecha_cita", {
                                required: {
                                    value: true,
                                    message: "ingrese una fecha por favor"
                                }
                            })}
                        />

                    </div>

                    <div className="col-xs-12 col-md-2 col-12 mb-3 fs-4 d-flex align-items-end">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type="submit">Buscar</button>

                        </div>
                    </div>
                </form>
                {errors["fecha_cita"] && <p className='text-danger' >
                    <h6>
                        {errors["fecha_cita"].message}
                    </h6>
                </p>}

                {/* {!results  ? ''  : <TableAppointment citas={results} /> } */}
                {!results ? ' ingrese valor' : !isEmpty ? <TableAppointment citas={results} />: 'no hay citas'}
            </div>
        </>
    )
}
export default Appointments