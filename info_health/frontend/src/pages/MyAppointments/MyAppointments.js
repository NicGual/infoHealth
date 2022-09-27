import React from "react";
import TableMyAppointments from "../../components/TableMyAppointments/TableMyAppointments";
import './MyAppointments.css'

const MyAppointments = () => {
    
    return(
        <>           
            <div className="container w-90">
                <div className="my-appointments-header mt-3 mb-3">Mis Citas</div>
                <TableMyAppointments/>      
            </div> 
            {/* <ModalWindow2>
                <p>por favor vuelva a iniciar sesion</p>
            </ModalWindow2>            */}
        </>
    )
}
export default MyAppointments