import React, { useState } from "react";
import { AiFillEdit } from 'react-icons/ai';
import CustomButtonLarge from "../CustomButton/CustomButtonLarge";
import './EditInformation.css'
import { useForm } from "react-hook-form";


const EditInformation = () => {

    const formData = [
        {
            inputTitle: "Telefono de la Casa",
            inputId: "telefono-casa",
            inputName: "telefonoCasa",
            inputType: "number",
            inputDefaultValue: "3200000",
            validation: /\d*/


        },
        {
            inputTitle: "Telefono Movil",
            inputId: "telefono-movil",
            inputName: "telefonoMovil",
            inputType: "number",
            inputDefaultValue: "3200000",
            validation: /\d*/


        },
        {
            inputTitle: "Telefono de Trabajo",
            inputId: "telefono-trabajo",
            inputName: "telefonoTrabajo",
            inputType: "number",
            inputDefaultValue: "3200000",
            validation: /\d*/


        },
        {
            inputTitle: "Dirección",
            inputId: "direccion",
            inputName: "direccionName",
            inputType: "text",
            inputDefaultValue: "calle 36 # 76-2",
            validation: /[a-zA-Z]+/



        },
        {
            inputTitle: "Departamento",
            inputId: "departamento",
            inputName: "departamentoName",
            inputType: "text",
            inputDefaultValue: "Huila",
            validation: /^[a-zA-Z ]*$/



        },
        {
            inputTitle: "Ciudad",
            inputId: "ciudad",
            inputName: "ciudadName",
            inputType: "text",
            inputDefaultValue: "Neiva",
            validation: /[a-zA-Z]+/



        }
    ]
    const [editAble, setEditAble] = useState(false)
    const editInformation = () => {
        setEditAble(!editAble)
        document.getElementById("edit-icon").style.display = "none"
    }
    const resetDefaultValues = (formData) => {
        formData.map((item) => (
            document.getElementById(item.inputId).value = item.inputDefaultValue
        ))
    }
    const cancelEdit = () => {
        resetDefaultValues(formData)
        setEditAble(!editAble)
        document.getElementById("edit-icon").style.display = "block"
        clearErrors()
    }
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
    const onSubmit = (e) => { console.log(e) }
    return (
        <>
            <div className="container w-90">
                <h1 className="mt-3 mb-3">Editar Informacion</h1>
                <div className="edit-info-header text-white d-flex align-items-center justify-content-between">
                    <h2 className=" ms-3">Datos de Localización</h2>
                    <AiFillEdit id="edit-icon" className="edit-information-icon me-3" onClick={editInformation} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-3">
                        {
                            formData.map((item) => (
                                <div className="col-sm-6 col-md-4 col-6">
                                    <label for={item.inputId} class="form-label">{item.inputTitle}</label>
                                    {                                       
                                            <input type={item.inputType} class="form-control" 
                                                pattern={item.pattern} 
                                                id={item.inputId} 
                                                name={item.inputName} 
                                                defaultValue={item.inputDefaultValue} 
                                                disabled={!editAble}
                                                {...register(item.inputName, {
                                                    required: {
                                                        value: true,
                                                        message: "el campo es requerido"
                                                    },
                                                    pattern: {
                                                        value: item.validation,
                                                        message: "Ingrese un formato correcto"

                                                    }
                                                })}
                                            />
                                    }
                                    {errors[item.inputName] && <p className='text-danger' >
                                        <small>
                                            {errors[item.inputName].message}
                                        </small>
                                    </p>}
                                </div>
                            ))
                        }
                        {editAble && (
                            <>
                                <div className="mt-3 d-flex align-items-center justify-content-center">
                                    <button className="col-5 m-1 btn btn-primary" type="submit">Guardar</button>
                                    <button className="col-5 m-1 btn btn-danger" onClick={cancelEdit}>cancelar</button>
                                </div>

                            </>)}
                    </div>
                </form>

                <div className="session-data-header text-white mt-4 mb-3">
                    <h2 className="ms-3">Datos de Sesion</h2>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-12">
                        <label for="correo-electronico" class="form-label">Correo</label>
                        <input type="number" pattern="\d*" class="form-control" id="correo-electronico" />
                    </div>
                    <div className="col-xs-12 col-md-4 col-12 d-flex align-items-end justify-content-start mt-3 fs-4">
                        <CustomButtonLarge action={() => { }} placeholder={"cambiar correo"} />
                    </div>

                    <div className="col-xs-12 col-md-6 col-12">
                        <label for="contraseña" class="form-label">Contraseña</label>
                        <input type="email" class="form-control" id="contraseña" />
                    </div>
                    <div className="col-xs-12 col-md-4 col-12 d-flex align-items-end justify-content-start mt-3 fs-4">
                        <CustomButtonLarge action={() => { }} placeholder={"cambiar contraseña"} />
                    </div>
                </div>

            </div>
        </>

    )
}

export default EditInformation