import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios'
import image from '../../public/ips_logo.png'

const Signup = () => {
    const initialState = {
        name: '',
        surname: '',
        email: '',
        usertype: '',
        password: '',
        confirmpassword: ''
    };
    const [form, setForm] = useState(initialState)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const switchMode = () => {
        window.location.href = './signin'
    }
    const formSubmit = async (e) => {
        //e.preventDefault()
        try {
            const url = 'http://localhost:4000/auth/singup'
            console.log(e)
            const { data } = await Axios.post(
                url,
                {
                    ...e

                }
            );
            
            if (data.status === 'User Created') {                                              
                window.location.href = './signin'
            } else {
                if (data.status === 'Email allready in use') {
                    alert('Email allready in use')
                } 
            }
        } catch (error) {
            console.log(error);
        }

    }
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = useRef({})
    password.current = watch("password", "");

    return (
        <>
            <div className="row">
                <div className="col-md-4  col-xl-6 mx-auto">
                    <div className="card mt-4 text-center">
                        <div className="card">
                            <div className="card-header">
                                <h2>Create Account</h2>
                            </div>
                            <img src={image} className="mx-auto d-block m-4 logo" alt="Logo" />
                            <div className="card-body">
                                <div className="card ">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit((data) => formSubmit(data))} className="justify-content-center" method="POST" noValidate>

                                            <h6 className="font-weight-bold mt-0 mb-3">Información personal</h6>
                                            <div className="form-group row d-flex justify-content-center">
                                                <div className="col-md-6 mb-2">
                                                    <select
                                                        className={errors.identification_type ? "form-select mr-sm-2 bg-light border-danger" : "form-select mr-sm-2 bg-light"}
                                                        id="inlineFormCustomSelect"
                                                        name="identification_type"
                                                        autoFocus
                                                        onChange={handleChange}
                                                        {...register("identification_type", {
                                                            required: {
                                                                value: true,
                                                                message: "seleccione un tipo de identificacion"
                                                            }
                                                        })}

                                                    >

                                                        <option selected value="" disabled>--- Elija un tipo de identificación ---</option>
                                                        <option value="Cedula">Cédula</option>
                                                        <option value="Cedula_extrangeria">Cédula de extrangeria</option>
                                                        <option value="Pasaporte">Pasaporte</option>
                                                        <option value="Tarjeta_identidad">Tarjeta de identidad</option>
                                                        <option value="Registro_civil">Registri civil</option>
                                                        <option value="Carnet_diplomatico">Carné diplomático</option>
                                                        <option value="Salvoconducto">Salvoconducto</option>
                                                        <option value="Perm_especial_permanencia">Perrmiso especial de permanencia</option>
                                                        <option value="Documento_extrangero">Documento extrangero</option>
                                                        <option value="Sin_identificacion">Sin identificación</option>

                                                    </select>
                                                    {errors.identification_type && <p className='text-danger' >
                                                        <small>
                                                            {errors.identification_type.message}
                                                        </small>
                                                    </p>}



                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input
                                                        type="number"
                                                        className={errors.identification ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        placeholder="Número de identificación"
                                                        name="identification"
                                                        id='formIdentification'
                                                        onChange={handleChange}
                                                        {...register("identification", {
                                                            required: {
                                                                value: true,
                                                                message: "el campo es requerido"
                                                            }
                                                        })}

                                                    />
                                                    {errors.identification && <p><small className='text-danger'>{errors.identification.message}</small></p>}
                                                </div>
                                                <div className="col-md-4 mb-0">
                                                    <input
                                                        type="text"
                                                        className={errors.name ? "form-control bg-light border-danger" : "form-control bg-light"}
                                                        name="name"
                                                        placeholder="Nombres"
                                                        id='formName'
                                                        onChange={handleChange}
                                                        {...register("name", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su nombre"
                                                            }
                                                        })}
                                                    />
                                                    {errors.name && <p><small className='text-danger'>{errors.name.message}</small></p>}
                                                </div>
                                                <div className="col-md-4 mb-0">
                                                    <input
                                                        type="text"
                                                        className={errors.lastname ? "form-control bg-light border-danger" : "form-control bg-light"}
                                                        name="lastname"
                                                        placeholder="Primer apellido"
                                                        onChange={handleChange}
                                                        {...register("lastname", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su apellido"
                                                            }
                                                        })}
                                                    />
                                                    {errors.lastname && <p><small className='text-danger'>{errors.lastname.message}</small></p>}
                                                </div>
                                                <div className="col-md-4 mb-0">
                                                    <input
                                                        type="text"
                                                        className={errors.sec_lastname ? "form-control bg-light border-danger" : "form-control bg-light"}
                                                        name="sec_lastname"
                                                        placeholder="Segundo apellido"
                                                        onChange={handleChange}
                                                        {...register("sec_lastname", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su segundo apellido"
                                                            }
                                                        })}
                                                    />
                                                    {errors.sec_lastname && <p><small className='text-danger'>{errors.sec_lastname.message}</small></p>}


                                                </div>
                                            </div>


                                            <h6 className="font-weight-bold mt-2 mb-1">Información general</h6>
                                            <div className="form-group row">
                                                <div className="col-md-6 mb-0">
                                                    <label for="f_nac" className="mb-0">Fecha de nacimiento:</label>
                                                    <input
                                                        type="date"
                                                        className={errors.f_nac ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        id="date_of_birth"
                                                        name="date_of_birth"
                                                        placeholder="Fecha de nacimiento"
                                                        onChange={handleChange}
                                                        {...register("date_of_birth", {
                                                            required: {
                                                                value: true,
                                                                valueAsDate: true,
                                                                message: "seleccione un tipo de identificacion"
                                                            }
                                                        })}
                                                    />
                                                    {errors.f_nac && <p><small className='text-danger'>{errors.f_nac.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label for="genero" className="mb-0">Genero:</label>
                                                    <select className={errors.gender ? "form-select mr-sm-2 bg-light border-danger" : "form-select mr-sm-2 bg-light mt-0"}
                                                        id="gender"
                                                        name="gender"
                                                        onChange={handleChange}
                                                        {...register("gender", {
                                                            required: {
                                                                value: true,
                                                                message: "seleccione su genero"
                                                            }
                                                        })}
                                                    >
                                                        <option value="" selected disabled>--- Seleccione su sexo ---</option>
                                                        <option value="Masculino">Masculino</option>
                                                        <option value="Femenino">Femenino</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>
                                                    {errors.gender && <p><small className='text-danger'>{errors.gender.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label for="sangre" className="mb-0">Tipo de sangre:</label>
                                                    <select className={errors.blood_type ? "form-select mr-sm-2 bg-light border-danger" : "form-select mr-sm-2 bg-light mt-0"}
                                                        id="blood_type"
                                                        name="blood_type"
                                                        onChange={handleChange}
                                                        {...register("blood_type", {
                                                            required: {
                                                                value: true,
                                                                message: "seleccione su tipo de sangre"
                                                            }
                                                        })}
                                                    >
                                                        <option value="" selected disabled>--- seleccione su tipo de sangre ---</option>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="AB">AB</option>
                                                        <option value="O">O</option>
                                                    </select>
                                                    {errors.blood_type && <p><small className='text-danger'>{errors.blood_type.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label for="rh" className="mb-0">Rh:</label>
                                                    <select className={errors.rh ? "form-select mr-sm-2 bg-light border-danger" : "form-select mr-sm-2 bg-light mt-0"}
                                                        id="rh"
                                                        name="rh"
                                                        onChange={handleChange}
                                                        {...register("rh", {
                                                            required: {
                                                                value: true,
                                                                message: "seleccione su Rh"
                                                            }
                                                        })}
                                                    >
                                                        <option value="" selected disabled>--- Seleccione su Rh ---</option>
                                                        <option value="Positivo">Positivo</option>
                                                        <option value="Negativo">Negativo</option>
                                                    </select>
                                                    {errors.rh && <p><small className='text-danger'>{errors.rh.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <label for="marital_status" className="mb-0">Estado civil:</label>
                                                    <select className={errors.marital_status ? "form-select mr-sm-2 bg-light border-danger" : "form-select mr-sm-2 bg-light mt-0"}
                                                        id="marital_status"
                                                        name="marital_status"
                                                        onChange={handleChange}
                                                        {...register("marital_status", {
                                                            required: {
                                                                value: true,
                                                                message: "seleccione su Rh"
                                                            }
                                                        })}
                                                    >
                                                        <option value="" selected disabled>---Seleccione su estado civil ---</option>
                                                        <option value="Soltero">Soltero/a</option>
                                                        <option value="Casado">Casado/a</option>
                                                        <option value="UnionLibre">Unión libre</option>
                                                        <option value="Divorciado">Divorsiado/a</option>
                                                        <option value="Separado">Separado/a</option>
                                                        <option value="Viudo">Viudo/a</option>
                                                    </select>
                                                    {errors.marital_status && <p><small className='text-danger'>{errors.marital_status.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <label for="eps" className="mb-0">EPS:</label>
                                                    <input
                                                        type="text"
                                                        id="EPS"
                                                        name="EPS"
                                                        placeholder="EPS a la que está afiliado/a"
                                                        onChange={handleChange}
                                                        className={errors.EPS ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("EPS", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su eps"
                                                            }
                                                        })}
                                                    />
                                                    {errors.EPS && <p><small className='text-danger'>{errors.EPS.message}</small></p>}
                                                </div>
                                            </div>


                                            <h6 className="font-weight-bold mt-2 mb-1">Datos de localización</h6>
                                            <div className="form-group row">
                                                <div className="col-md-6 mb-2">
                                                    <input
                                                        type="number"
                                                        name="home_phone"
                                                        placeholder="Teléfono de la casa"
                                                        onChange={handleChange}
                                                        className={errors.home_phone ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("home_phone", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su telefono"
                                                            }
                                                        })}
                                                    />
                                                    {errors.home_phone && <p><small className='text-danger'>{errors.home_phone.message}</small></p>}


                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input
                                                        type="number"
                                                        name="mobile_phone"
                                                        placeholder="Teléfono móvil"
                                                        onChange={handleChange}
                                                        className={errors.mobile_phone ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("mobile_phone", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su telefono movil"
                                                            }
                                                        })}
                                                    />
                                                    {errors.mobile_phone && <p><small className='text-danger'>{errors.mobile_phone.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input
                                                        type="number"
                                                        name="work_phone"
                                                        placeholder="Teléfono del trabajo"
                                                        onChange={handleChange}
                                                        className={errors.work_phone ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("work_phone", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su telefono del trabajo"
                                                            }
                                                        })}
                                                    />
                                                    {errors.work_phone && <p><small className='text-danger'>{errors.work_phone.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        placeholder="Dirección"
                                                        onChange={handleChange}
                                                        className={errors.address ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("address", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su direccion"
                                                            }
                                                        })}
                                                    />
                                                    {errors.address && <p><small className='text-danger'>{errors.address.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        placeholder="Ciudad"
                                                        onChange={handleChange}
                                                        className={errors.city ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("city", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su ciudad"
                                                            }
                                                        })}
                                                    />
                                                    {errors.city && <p><small className='text-danger'>{errors.city.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input
                                                        type="text"
                                                        name="department"
                                                        placeholder="Departamento"
                                                        onChange={handleChange}
                                                        className={errors.department ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("department", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su departamento"
                                                            }
                                                        })}
                                                    />
                                                    {errors.department && <p><small className='text-danger'>{errors.department.message}</small></p>}
                                                </div>
                                            </div>


                                            <h6 className="font-weight-bold mt-2 mb-1">Información de sesión</h6>
                                            <div className="form-group row d-flex justify-content-center">
                                                <div className="col-md-6 mb-2">
                                                    <select       
                                                        id="role" 
                                                        name="role"
                                                        onChange={handleChange}
                                                        className={errors.role ? "form-select mr-sm-2 bg-light border-danger" : "form-select mr-sm-2 bg-light mt-0"}
                                                        {...register("role", {
                                                            required: {
                                                                value: true,
                                                                message: "seleccione su tipo de usuario"
                                                            }
                                                        })}
                                                        >
                                                        <option value="" selected disabled>--- Elija un tipo de usuario ---</option>
                                                        <option value="Paciente">Paciente</option>
                                                        <option value="Empleado">Empleado</option>
                                                        <option value="Medico">Médico</option>
                                                        <option value="Admin">Administrador de la plataforma</option>
                                                    </select>
                                                    {errors.role && <p><small className='text-danger'>{errors.role.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        onChange={handleChange}
                                                        className={errors.email ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("email", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su email"
                                                            },
                                                            pattern: {
                                                                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                                                message: "Ingrese un correo con formato correcto"

                                                            }
                                                        })}
                                                    />
                                                    {errors.email && <p><small className='text-danger'>{errors.email.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        placeholder="Contraseña"
                                                        onChange={handleChange}
                                                        className={errors.password ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("password", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su contraseña"
                                                            }
                                                        })}
                                                    />
                                                    {errors.password && <p><small className='text-danger'>{errors.password.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input
                                                        type="password"
                                                        name="confirm_password"
                                                        placeholder="Confirmar contraseña"
                                                        onChange={handleChange}
                                                        className={errors.confirm_password ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("confirm_password", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese nuevamente su contraseña"
                                                            },
                                                            validate: (value) => value === password.current || "las contraseñas no coinciden"
                                                        })}
                                                    />
                                                    {errors.confirm_password && <p><small className='text-danger'>{errors.confirm_password.message}</small></p>}
                                                </div>
                                            </div>


                                            <h6 className="font-weight-bold mt-2 mb-1">Información de contacto</h6>
                                            <div className="form-group row">
                                                <div className="col-md-4 mb-2">
                                                    <input
                                                        type="text"
                                                        name="contact_name"
                                                        placeholder="Nombres del contacto"
                                                        onChange={handleChange}
                                                        className={errors.contact_name ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("contact_name", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese el nombre de su contacto"
                                                            }
                                                        })}
                                                    />
                                                    {errors.contact_name && <p><small className='text-danger'>{errors.contact_name.message}</small></p>}
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <input
                                                        type="text"
                                                        name="contact_lastname"
                                                        placeholder="Primer apellido del contacto"
                                                        onChange={handleChange}
                                                        className={errors.contact_lastname ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("contact_lastname", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese el apellido de su contacto"
                                                            }
                                                        })}
                                                    />
                                                    {errors.contact_lastname && <p><small className='text-danger'>{errors.contact_lastname.message}</small></p>}
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <input
                                                        type="text"
                                                        name="contact_sec_lastname"
                                                        placeholder="Segundo apellido del contacto"
                                                        onChange={handleChange}
                                                        className={errors.contact_sec_lastname ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("contact_sec_lastname", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese el segundo apellido de su contacto"
                                                            }
                                                        })}
                                                    />
                                                    {errors.contact_sec_lastname && <p><small className='text-danger'>{errors.contact_sec_lastname.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input
                                                        type="text"
                                                        name="contact_relationship"
                                                        placeholder="Relación o parentesco"
                                                        onChange={handleChange}
                                                        className={errors.contact_relationship ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("contact_relationship", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese su relacion con el contacto"
                                                            }
                                                        })}
                                                    />
                                                    {errors.contact_relationship && <p><small className='text-danger'>{errors.contact_relationship.message}</small></p>}
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input
                                                        type="number"
                                                        name="contact_phone"
                                                        placeholder="Teléfono del contacto"
                                                        onChange={handleChange}
                                                        className={errors.contact_phone ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                                        {...register("contact_phone", {
                                                            required: {
                                                                value: true,
                                                                message: "ingrese el telefono de su contacto"
                                                            }
                                                        })}
                                                    />
                                                    {errors.contact_phone && <p><small className='text-danger'>{errors.contact_phone.message}</small></p>}
                                                </div>
                                            </div>


                                            <div className="col-md-4 mt-2 mx-auto">
                                                <button type="submit" className="btn btn-primary btn-block">Crear</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        Already Have an account ?
                                        <span onClick={switchMode} className="text-primary text-decoration-underline hover-shadow">
                                            Sing in
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}



export default Signup