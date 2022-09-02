import React, {useState} from "react";
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import './TableMyAppointments.css'

const TableMyAppointments = () => {

    const [selectActive, setSelectActive] = useState(true);
    const [selectPrevious, setSelectPrevious] = useState(false)
    const active = "container-option-active ms-2 d-flex align-items-center justify-content-center";
    const disabled = "container-option-disabled ms-2 d-flex align-items-center justify-content-center";
    const selectOptionActive = () =>{ 
        if (!selectActive){
            setSelectPrevious(false)
            setSelectActive(!selectActive)           
        }                    
    }
    const selectOptionPrevious = () =>{ 
        if (!selectPrevious){
            setSelectActive(!selectActive)
            setSelectPrevious(!selectPrevious)            
        }
        
        
    }

    return (
        <>
            {/* <div className="container">
                <table className="table table-borderless">
                    <thead>
                        <tr className="table-header rounded-pill">
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody className="row-body">
                        <tr className="mt-2 mb-2 ">
                            <th scope="row"  className="d-flex align-items-center">7:00 AM</th>
                            <td className="nombre"> Nicolás Gualteros Herrera</td>
                            <td className="especialidad">Medicina General</td>
                            <td> 
                                <div className="opciones d-flex align-items-center  justify-content-between">
                                    <BiEdit className="edit"/>
                                    <AiFillDelete className="delete"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="mt-2 mb-2">
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr className="mt-2 mb-2">
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            
                <div>Mis Citas</div>
                <div className="container-options d-flex justify-content-between ">
                    <div className="table-selector d-flex align-items-center col-10 col-md-11">
                        <div className= {selectActive? active:disabled} onClick={()=>{selectOptionActive()}}>
                            <div className="active-appointment d-flex align-items-center justify-content-center">Citas Activas</div>
                        </div>
                        <div className= {selectPrevious? active : disabled} onClick={()=>{selectOptionPrevious()}}>
                            <div className="previous d-flex align-items-center justify-content-center" onClick={selectOptionPrevious}>Citas Anteriores</div>
                        </div>
                    </div>

                    <div className="search d-flex align-items-center justify-content-end col-2 col-md-1">
                        <FaSearch className="search-icon me-4" />
                    </div>
                </div>

            


        </>
    )
}
export default TableMyAppointments