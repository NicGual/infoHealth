import React, { useState } from "react";
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import './TableMyAppointments.css'

const TableMyAppointments = () => {

    const [selectActive, setSelectActive] = useState(true);
    const [selectPrevious, setSelectPrevious] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    const active = "container-option-active ms-2 d-flex align-items-center justify-content-center";
    const disabled = "container-option-disabled ms-2 d-flex align-items-center justify-content-center";
    const selectOptionActive = () => {
        if (!selectActive) {
            setSelectPrevious(false)
            setSelectActive(!selectActive)
        }
    }
    const selectOptionPrevious = () => {
        if (!selectPrevious) {
            setSelectActive(!selectActive)
            setSelectPrevious(!selectPrevious)
        }
    }
    const search = () => {
        setActiveSearch((prev) => !prev)
    }
    const doNothing = () => { }

    return (
        <>
            <div>Mis Citas</div>
            <div className="container-options d-flex justify-content-between ">
                <div className="table-selector d-flex align-items-center col-10 col-md-11">
                    <div className={selectActive ? active : disabled} onClick={() => { selectOptionActive() }}>
                        <div className="active-appointment d-flex align-items-center justify-content-center">Citas Activas</div>
                    </div>
                    <div className={selectPrevious ? active : disabled} onClick={() => { selectOptionPrevious() }}>
                        <div className="previous d-flex align-items-center justify-content-center" onClick={selectOptionPrevious}>Citas Anteriores</div>
                    </div>
                </div>

                <div className="search d-flex align-items-center justify-content-end col-2 col-md-1">
                    <FaSearch className="search-icon me-4" onClick={!activeSearch ? search : doNothing} />
                </div>
            </div>
            {activeSearch ?
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="busqueda por fecha" onFocus={(e)=>{e.target.type = 'date'}}/>
                    </div>
                : ''}
        </>
    )
}
export default TableMyAppointments