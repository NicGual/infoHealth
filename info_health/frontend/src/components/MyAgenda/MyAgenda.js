import React from "react";
import {useNavigate} from 'react-router-dom'
import CustomButtonLarge from "../CustomButton/CustomButtonLarge";
import RowBody from "../RowBody/RowBody";
import SectionHeader from "../SectionHeader/SectionHeader";
import './MyAgenda.css'

const MyAgenda = () => {
    const doctorData = {
        name: "Doctor: Jose Gomez"
    }
    const agendaData = {
        date: "12/09/2022",
        appointments:
            [{
                patientName: "Nicolas Gualteros Herrera",
                appointmentDate: "4:00 PM",
                state: "Pendiente"

            },
            {
                patientName: "Nicolas Gualteros Herrera",
                appointmentDate: "4:00 PM",
                state: "Pendiente"

            },
            {
                patientName: "Nicolas Gualteros Herrera",
                appointmentDate: "4:00 PM",
                state: "Atendido"

            }
            ]

    }
    const navigate = useNavigate();
    const patientCare = () =>{
        navigate('../atender-paciente')
    }
    return (
        <>
            <div className="container w-90">
                <SectionHeader MainText={doctorData.name}>
                    <h2 className="me-2">{agendaData.date}</h2>
                </SectionHeader>
                {
                    agendaData.appointments.map((item) => (
                        <RowBody size="small" className="mt-1 mb-1">
                            
                            <div className="col-xs-6 col-md-4 col-6 fs-5">{item.patientName}</div>
                            <div className="col-xs-4 col-md-2 col-3 fs-5 d-flex justify-content-center">{item.appointmentDate}</div>
                            <div className={`${item.state} col-xs-4 col-md-2 col-3 fs-5 d-flex justify-content-center`}>{item.state}</div>
                            <div className="col-xs-12 col-md-4 col-12 fs-5 d-flex justify-content-center mb-1">
                            {
                                item.state=="Pendiente" ? 
                                    <CustomButtonLarge placeholder={"Atender"} className="d-flex justify-content-center align-items-center" action={patientCare} /> 
                                    : 
                                    <CustomButtonLarge placeholder={"Editar"} />
                            }
                                
                            </div>
                        </RowBody>
                    ))
                }
            </div>

        </>
    )
}

export default MyAgenda