import React from "react";
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';
import SectionHeader from "../SectionHeader/SectionHeader";
import './PatientCare.css'
import Results from "../Results/Results";
const PatientCare = () => {

    const appointmentData = {
        patientName: "Nicolas Gualteros Herrera",
        date: "11/09/2022"
    }
    const navigate = useNavigate();

    return (
        <>
            <div className="container w-90">
                <div className="patient-care-header d-flex align-items-center mt-2">
                    <BiArrowBack className="fs-2 me-3" onClick={() => { navigate('../agenda') }} />
                    <h1>Atender paciente</h1>
                </div>
                <div className="accordion accordion-flush" id="accordionPatientCare">
                    <div className="">
                        <h2 className="accordion-header" id="flush-headingPatientData">

                            <div className="patient-care-section"
                                onClick={() => {  }}
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapsePatientData"
                                aria-expanded="false"
                                aria-controls="flush-collapsePatientData">
                                <SectionHeader MainText={`${appointmentData.patientName}`}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="me-2">{appointmentData.date}</h2>
                                        <AiOutlineDown id="arrow-1" className="icon rotate ms-2 me-2 fs-3" />
                                    </div>

                                </SectionHeader>
                            </div>
                        </h2>
                        <div id="flush-collapsePatientData" className="accordion-collapse collapse show" aria-labelledby="flush-headingPatientData" data-bs-parent="#accordionPatientCare">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="accordion-header" id="flush-headingPatientData">

                            <div className="patient-care-section"
                                onClick={() => { }}
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseResults"
                                aria-expanded="false"
                                aria-controls="flush-collapseResults">
                                <SectionHeader MainText="Historial de Resultados">
                                    <div className="d-flex align-items-center">
                                        <AiOutlineDown id="arrow-2" className="icon rotate ms-2 me-2 fs-3" />
                                    </div>

                                </SectionHeader>
                            </div>
                        </h2>
                        <div id="flush-collapseResults"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingPatientData"
                            data-bs-parent="#accordionPatientCare">
                            <Results/>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="accordion-header" id="flush-headingObservations">

                            <div className="patient-care-section"
                                onClick={() => {    }}
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseObservations"
                                aria-expanded="false"
                                aria-controls="flush-collapseObservations">
                                <SectionHeader MainText="Observaciones de Consulta">
                                    <div className="d-flex align-items-center">
                                        <AiOutlineDown id="arrow-3" className="icon rotate ms-2 me-2 fs-3" />
                                    </div>

                                </SectionHeader>
                            </div>
                        </h2>
                        <div id="flush-collapseObservations"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingObservations"
                            data-bs-parent="#accordionPatientCare">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
export default PatientCare