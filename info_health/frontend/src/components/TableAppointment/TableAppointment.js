import React from "react";

const TableAppointment = (props) => {


    return (
        <> 
            <div className="table-container p-3">
                
                {props.citas.map((item) => (                            
                    item.detalles.map((cita,index) => (
                                                                                    
                        <>  
                            {index === 0 ? (<div className="table-head row text-white ps-3 d-flex align-items-center">{item.fecha}</div>): ''}  
                            <div className="table-row row   mt-3 mb-3">
                                    <div className="  col-2 d-flex align-items-center justify-content-center">
                                        <h2 className=" p-2 ">{cita.hora}</h2>
                                    </div>
                                    <div className="col-4 col-lg-5 col-md-5 d-flex align-items-center justify-content-center">
                                        <h2 className=" p-2 ">{cita.doctor}</h2>
                                    </div>
                                    <div className="col-3  d-flex align-items-center justify-content-center">
                                        <h2 className=" p-2 ">{cita.procedimiento}</h2>
                                    </div>
                                    <div className="table-font col-3 col-lg-2 col-md-2  d-flex align-items-center justify-content-center">
                                        <button className="  assign-button ms-2  d-flex align-items-center justify-content-center">asignar</button>
                                    </div>

                            </div>
                        </>                       
                    ))
                ))}   
            </div>        
        </>
    )
}
export default TableAppointment