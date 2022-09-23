import React from "react"
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import './TableRow.css'

const TableRow = (props) => {
    const hora = props.data.hora;
    const nombre = props.data.nombre;
    const especialidad = props.data.especialidad
    return (

        <div className="row-container d-flex align-items-center p-3 mt-3 mb-3">
            <div className="col-2 d-flex justify-content-center me-1">{hora}</div>
            <div className="col-4 d-flex justify-content-center me-1">{nombre}</div>
            <div className="col-4 d-flex justify-content-center me-1">{especialidad}</div>
            <div className="row-icons col-1 d-flex justify-content-center me-1"><FiEdit className="row-icons-edit"/></div>
            <div className="row-icons col-1 d-flex justify-content-center me-1"><AiFillDelete className="row-icons-delete"/></div>
        </div>
    )

}
export default TableRow

