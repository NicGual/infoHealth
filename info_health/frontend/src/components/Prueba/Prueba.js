import React from "react";
import InputValidation from "../InputValidation/InputValidation";
import { useForm } from "react-hook-form";
import CustomButtonLarge from "../CustomButton/CustomButtonLarge";

const Prueba = () => {
    const onSubmit = (e) => { console.log(e) }
    const {handleSubmit} = useForm();
    return (
        <>
                    <InputValidation
                        inputId={"telefono-casa"} 
                        inputTitle={"Telefono de la Casa"} 
                        inputType={"number"} 
                        pattern={"\d*"} 
                        inputName={"telefonoCasa"} 
                        inputDefaultValue={"3200000"} 
                        editAble={false}
                    /> 
                    <CustomButtonLarge placeholder={"cambiar contraseña"}/>                   
        </>
    )
}
export default Prueba