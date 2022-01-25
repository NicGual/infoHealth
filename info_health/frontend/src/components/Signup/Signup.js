import React, { useState } from 'react';
import Cookies from 'universal-cookie'
import Axios from 'axios'
import image from '../../public/ips_logo.png'

const Signup = () => {
    const cookies =new Cookies()
    const initialState = {
        name: '',
        surname: '',
        email: '',
        usertype:'',
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
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = 'http://localhost:4000/auth/singup' 

            const { data } = await Axios.post(
                url,
                {
                    ...form

                }
            );
            if (data.status === 'Correct Password') {
                const userData = data.user;
                cookies.set('_id', userData._id, { path: "/" });
                cookies.set('name', userData.name, { path: "/" });
                cookies.set('email', userData.email, { path: "/" });
                cookies.set('password', userData.pasword, { path: "/" });
                cookies.set('usertype', userData.usertype, { path: "/" });
                window.location.href = './menu'
            } else {
                if (data.name) {
                    window.location.href = './login'
                } else {
                    alert('user or password does not match')
                }

            }
        } catch (error) {
            console.log(error);
        }

    }

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
                                        <form onSubmit={handleSubmit} className="justify-content-center" method="POST">

                                            <h6 className="font-weight-bold mt-0 mb-1">Información personal</h6>
                                            <div className="form-group row d-flex justify-content-center">
                                                <div className="col-md-6 mb-2">
                                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" 
                                                    name="identification_type" onChange={handleChange} autoFocus>

                                                        <option selected>--- Elija un tipo de identificación ---</option>
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
                                                    <a>error</a>
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input
                                                        type="number"
                                                        className="form-control bg-light"
                                                        placeholder="Número de identificación"
                                                        name="identification"
                                                        id='formIdentification'
                                                        onChange={handleChange}
                                                        autoFocus

                                                    />
                                                </div>
                                                <div className="col-md-4 mb-0">
                                                    <input
                                                        type="text"
                                                        className="form-control bg-light"
                                                        name="name"
                                                        placeholder="Nombres"
                                                        id='formName'
                                                        onChange={handleChange}
                                                        autoFocus

                                                    />
                                                </div>
                                                <div className="col-md-4 mb-0">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="lastname" 
                                                        placeholder="Primer apellido"
                                                        onChange={handleChange}
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-0">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="sec_lastname"
                                                        placeholder="Segundo apellido" 
                                                        onChange={handleChange}
                                                        autoFocus
                                                    />
                                                </div>
                                            </div>


                                            <h6 className="font-weight-bold mt-0 mb-1">Información general</h6>
                                            <div className="form-group row">
                                                <div className="col-md-6 mb-0">
                                                    <label for="f_nac" className="mb-0">Fecha de nacimiento:</label>
                                                    <input 
                                                        type="date" 
                                                        className="form-control bg-light mt-0" 
                                                        id="f_nac" 
                                                        name="date_of_bird" 
                                                        placeholder="Fecha de nacimiento"
                                                        onChange={handleChange}
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label for="genero" className="mb-0">Genero:</label>
                                                    <select className="custom-select mr-sm-2" id="gender" name="gender" 
                                                    onChange={handleChange} autoFocus>
                                                        <option selected>--- Seleccione su sexo ---</option>
                                                        <option value="Masculino">Masculino</option>
                                                        <option value="Femenino">Femenino</option>
                                                        <option value="Otro">Otro</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label for="sangre" className="mb-0">Tipo de sangre:</label>
                                                    <select className="custom-select mr-sm-2" id="blood_type" name="blood_type" 
                                                    onChange={handleChange} autoFocus>
                                                        <option selected>--- seleccione su tipo de sangre ---</option>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="AB">AB</option>
                                                        <option value="O">O</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <label for="rh" className="mb-0">Rh:</label>
                                                    <select className="custom-select mr-sm-2" id="rh" name="rh" 
                                                    onChange={handleChange} autoFocus>
                                                        <option selected>--- Seleccione su Rh ---</option>
                                                        <option value="Positivo">Positivo</option>
                                                        <option value="Negativo">Negativo</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <label for="marital_status" className="mb-0">Estado civil:</label>
                                                    <select className="custom-select mr-sm-2" id="marital_status" name="marital_status" 
                                                    onChange={handleChange} autoFocus>
                                                        <option value="Soltero">Soltero/a</option>
                                                        <option value="Casado">Casado/a</option>
                                                        <option value="UnionLibre">Unión libre</option>
                                                        <option value="Divorciado">Divorsiado/a</option>
                                                        <option value="Separado">Separado/a</option>
                                                        <option value="Viudo">Viudo/a</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <label for="eps" className="mb-0">EPS:</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        id="EPS" 
                                                        name="EPS" 
                                                        placeholder="EPS a la que está afiliado/a"
                                                        onChange={handleChange} 
                                                        autoFocus
                                                    />
                                                </div>
                                            </div>


                                            <h6 className="font-weight-bold mt-0 mb-1">Datos de localización</h6>
                                            <div className="form-group row">
                                                <div className="col-md-6 mb-2">
                                                    <input 
                                                        type="number" 
                                                        className="form-control bg-light" 
                                                        name="home_phone"    
                                                        placeholder="Teléfono de la casa" 
                                                        onChange={handleChange} 
                                                        autoFocus   
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input 
                                                        type="number" 
                                                        className="form-control bg-light" 
                                                        name="mobile_phone"
                                                        placeholder="Teléfono móvil" 
                                                        onChange={handleChange} 
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input 
                                                        type="number" 
                                                        className="form-control bg-light" 
                                                        name="work_phone"
                                                        placeholder="Teléfono del trabajo"
                                                        onChange={handleChange} 
                                                        autoFocus 

                                                    />
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="address"
                                                        placeholder="Dirección" 
                                                        onChange={handleChange} 
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="city"
                                                        placeholder="Ciudad"
                                                        onChange={handleChange} 
                                                        autoFocus                                                          
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="department"
                                                        placeholder="Departamento" 
                                                        onChange={handleChange} 
                                                        autoFocus                                                            
                                                    />
                                                </div>
                                            </div>


                                            <h6 className="font-weight-bold mt-0 mb-1">Información de sesión</h6>
                                            <div className="form-group row d-flex justify-content-center">
                                                <div className="col-md-6 mb-2">
                                                    <select className="custom-select mr-sm-2" id="role" name="role" 
                                                    onChange={handleChange} autoFocus>
                                                        <option selected>--- Elija un tipo de usuario ---</option>
                                                        <option value="Paciente">Paciente</option>
                                                        <option value="Empleado">Empleado</option>
                                                        <option value="Medico">Médico</option>
                                                        <option value="Admin">Administrador de la plataforma</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-2">
                                                    <input 
                                                        type="email" 
                                                        className="form-control bg-light" 
                                                        name="email" 
                                                        placeholder="Email"
                                                        onChange={handleChange} 
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input 
                                                        type="password" 
                                                        className="form-control bg-light" 
                                                        name="password" 
                                                        placeholder="Contraseña" 
                                                        onChange={handleChange} 
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input 
                                                        type="password" 
                                                        className="form-control bg-light" 
                                                        name="confirm_password" 
                                                        placeholder="Confirmar contraseña" 
                                                        onChange={handleChange} 
                                                        autoFocus
                                                    />
                                                </div>
                                            </div>


                                            <h6 className="font-weight-bold mt-0 mb-1">Información de contacto</h6>
                                            <div className="form-group row">
                                                <div className="col-md-4 mb-2">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="contact_name" 
                                                        placeholder="Nombres del contacto"
                                                        onChange={handleChange} 
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="contact_lastname" 
                                                        placeholder="Primer apellido del contacto"
                                                        onChange={handleChange} 
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="contact_sec_lastname"                                                      
                                                        placeholder="Segundo apellido del contacto"  
                                                        onChange={handleChange} 
                                                        autoFocus                                                      
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input 
                                                        type="text" 
                                                        className="form-control bg-light" 
                                                        name="contact_relationship"
                                                        placeholder="Relación o parentesco"
                                                        onChange={handleChange} 
                                                        autoFocus                                                         
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-0">
                                                    <input 
                                                        type="number" 
                                                        className="form-control bg-light" 
                                                        name="contact_phone"
                                                        placeholder="Teléfono del contacto" 
                                                        onChange={handleChange} 
                                                        autoFocus                                                      
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-md-4 mx-auto">
                                                <button type="submit"className="btn btn-primary btn-block">Crear</button>
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