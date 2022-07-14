import React, { useState} from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import image from '../../public/ips_logo.png';
import {useNavigate, useLocation} from 'react-router-dom'
 
const initialState = {
    name: '',
    surname: '',
    email: '',
    usertype: '',
    password: '',
    confirmpassword: ''
};
const Signin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/menu";
    const {auth, setAuth} = useAuth();
    const [form, setForm] = useState(initialState);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const switchMode = () => {
        navigate('../signup')
    }

    const formSubmit = async (e) => {
        //e.preventDefault()
        try {
            const url = 'http://localhost:4000/auth/singin'

            const { data } = await Axios.post(url, {  ...e  },{withCredentials: true});
            const userData = data.userInfo;
            const userToken = data.bearerAccessToken;
            const sidebarData = data.userSidebar;
            setAuth({userData,userToken,isAuthenticated: true,sidebarData});
            console.log(auth)
            if (data.status === 'Correct Password') {                
                window.localStorage.setItem(
                    'loggedUser', JSON.stringify(userToken));
                window.localStorage.setItem('isAuthenticated', 'true');
                window.localStorage.setItem('userData', JSON.stringify(userData));
                window.localStorage.setItem('sidebarData', JSON.stringify(sidebarData));
                //navigate('../menu')
                navigate(from, {replace: true})
                console.log(from)

            } else {
                 alert('user or password does not match')    
            }
        } catch (error) {
            console.log(error);
        }

    }
    
    return (
        <>
            
            <div className="row">
                <div className="col-md-4  col-xl-5 mx-auto">
                    <div className="card mt-4 text-center">
                        <div className="card">
                            <div className="card-header">
                                <h2>Account Login</h2>
                            </div>
                            <img src={image} className="mx-auto d-block m-4 logo" alt="Logo" />
                            <div className="card-body">
                                <form onSubmit={handleSubmit(formSubmit)} method="POST" noValidate>
                                    <div className="form-floating mt-2 ">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            id='formEmail'
                                            onChange={handleChange}
                                            autoFocus
                                            className={errors.email ? "form-control bg-light mt-0 border-danger" : "form-control bg-light mt-0"}
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "ingrese su email de usuario"
                                                },
                                                pattern: {
                                                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                                    message: "Ingrese un correo con formato correcto"
                                                }
                                            })}
                                        />
                                        {errors.email && <p><small className='text-danger'>{errors.email.message}</small></p>}
                                        <label className='text-capitalize' for='formEmail' >email</label>
                                    </div>
                                    <div className="form-floating mt-2">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            id='formPassword'
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
                                        <label className='text-capitalize' for='formPassword' >password</label>
                                    </div>
                                    <div className="form-group mt-4">
                                        <button type="submit" className="btn btn-primary btn-block">Sing In</button>
                                    </div>
                                </form>
                                <div className="mt-4">
                                    <p>
                                        Dont Have an account
                                        <span onClick={switchMode} className="text-primary text-decoration-underline hover-shadow">
                                            Sing Up

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
};
export default Signin