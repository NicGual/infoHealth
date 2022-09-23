import React from "react";
import { useForm } from "react-hook-form";

const InputValidation = ({ inputId, inputTitle, inputType, pattern, inputName, inputDefaultValue, editAble }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (e) => { console.log(e) }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-sm-6 col-md-4 col-6">
                    <label for={inputId} class="form-label">{inputTitle}</label>
                    {
                        !editAble
                            ? <input type={inputType} class="form-control" pattern={pattern} id={inputId} name={inputName} defaultValue={inputDefaultValue} disabled />
                            : <input type={inputType} class="form-control"  id={inputId} name={inputName} defaultValue={inputDefaultValue}
                                {...register(inputName, {
                                    required: {
                                        value: true,
                                        message: "el campo es requerido"
                                    },
                                    pattern: {
                                        value: /^[0-9,$]*$/,
                                        message: "Ingrese un correo con formato correcto"

                                    }
                                })}
                            />
                    }
                    {errors[inputName] && <p className='text-danger' >
                        <small>
                            {errors[inputName].message}
                        </small>
                    </p>}
                </div>
                <button type="submit">submit</button>
            </form>



        </>
    )

}

export default InputValidation