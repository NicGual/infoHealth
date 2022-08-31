import React from "react";

const TableAppointment = (props) => {


    return (
        <>
            {props.citas.map((item) => (                            
                item.detalles.map((cita,index) => (
                                                                                
                    <>  
                        {index == 0 ? (<div className="table-head row text-white ps-3 d-flex align-items-center">{item.fecha}</div>): ''}  
                        <div className="table-row row  rounded-pill mt-2 mb-2">
                                <div className=" col-2  d-flex align-items-center justify-content-center">
                                    <h2 className="table-font p-2 fs-4">{cita.hora}</h2>
                                </div>
                                <div className="col-5  d-flex align-items-center justify-content-center">
                                    <h2 className="table-font p-2 fs-4">{cita.doctor}</h2>
                                </div>
                                <div className="col-3  d-flex align-items-center justify-content-center">
                                    <h2 className="table-font p-2 fs-4">{cita.procedimiento}</h2>
                                </div>
                                <div className="col-2  d-flex align-items-center justify-content-center">
                                    <button className=" table-font  assign-button ms-2 fs-4 d-flex align-items-center justify-content-center">asignar</button>
                                </div>

                        </div>
                    </>                       
                ))
            ))}           
        </>
    )
}
export default TableAppointment