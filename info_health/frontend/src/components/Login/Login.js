import React, { useState } from 'react';
import Cookies from 'universal-cookie'
import Axios from 'axios'
import image from '../../public/ips_logo.png'

const cookies = new Cookies();
const initialState = {
    name: '',
    surname: '',
    email: '',
    usertype:'',
    password: '',
    confirmpassword: ''
};
const Login = () => {

    const [form, setForm] = useState(initialState)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [isSingup, setIsSingup] = useState(false);
    const switchMode = () => setIsSingup(!isSingup);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = isSingup ? 'http://localhost:4000/auth/singup' : 'http://localhost:4000/auth/singin'
            
            const { data } = await Axios.post(
                url,
                {
                    ...form

                }
            );
            /* el siguiente codgo se jecuta siempre ya que no discrimina si se hizo la peticion post a singup o singin
               lo que se deberia hacer es ver si se puede hacer un custom hook que maneje esa logica o se puede hacer
               de otra forma. 
            */
            if (data.status === 'Correct Password'){
                const userData=data.user;
                cookies.set('_id', userData._id,{path:"/"});
                cookies.set('name', userData.name,{path:"/"});
                cookies.set('email', userData.email,{path:"/"});
                cookies.set('password', userData.pasword,{path:"/"});
                cookies.set('usertype', userData.usertype,{path:"/"});
                window.location.href='./menu'
                

            }else{
                if(data.name){
                    window.location.href='./login'
                }else{
                    alert('user or password does not match')
                }
                
            }
        } catch (error) {
            console.log(error);
        }

    }
    const verification = () =>{
        if(cookies.get('name')) {
            window.location.href="./menu"
            }
    }
    return (
        <>
        {verification()}
        <div className="row">
            <div className="col-md-4  col-xl-5 mx-auto">
                <div className="card mt-4 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h2>{isSingup ? 'Account Register' : 'Account Login'}</h2>
                        </div>
                        <img src={image} className="mx-auto d-block m-4 logo" alt="Logo" />
                        <div className="card-body">
                            <form onSubmit={handleSubmit} method="POST">
                                {isSingup && (
                                    <>
                                        <div className="form-floating mt-2 mb-2 ">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                name="name"
                                                id='formName'
                                                onChange={handleChange}
                                                autoFocus
                                            />
                                            <label className='text-capitalize' for='formName' >name</label>
                                        </div>
                                        <div className="form-floating mt-2 mb-2 ">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Surname"
                                                name="surname"
                                                id='formSurname'
                                                onChange={handleChange}
                                                autoFocus
                                            />
                                            <label className='text-capitalize mt-1' for='formSurname'>surname</label>
                                        </div>
                                        <div className="form-floating mt-2">
                                            <select className="form-select" aria-label="Default select example" name="usertype"
                                                id='userType' onChange={handleChange} autoFocus>
                                                <option selected></option>
                                                <option value="patient">Patient</option>
                                                <option value="doctor">Doctor</option>
                                                <option value="laboratorist">Laboratorist</option>
                                            </select>
        
                                            <label className='text-capitalize' for='userType'> user type</label>
                                        </div>
                                    </>


                                )}
                                <div className="form-floating mt-2 ">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        id='formEmail'
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    <label className='text-capitalize' for='formEmail' >email</label>
                                </div>
                                <div className="form-floating mt-2">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        id='formPassword'
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    <label className='text-capitalize' for='formPassword' >password</label>
                                </div>
                                {isSingup && (
                                    <>
                                        
                                        <div className="form-floating mt-2">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                name="confirmpassword"
                                                id='formConfirmPassword'
                                                onChange={handleChange}
                                                autoFocus
                                            />
                                            <label className='text-capitalize' for='formConfirmPassword'> confirm password</label>
                                        </div>
                                    </>
                                )}
                                <div className="form-group mt-4">
                                    <button type="submit" className="btn btn-primary btn-block">{isSingup ? 'Sing Up' : 'Sing In'}</button>
                                </div>
                            </form>
                            <div className="mt-4">
                                <p>
                                    {isSingup ? 'already have an account?' : 'Dont Have an account'}
                                    <span onClick={switchMode} className="text-primary text-decoration-underline hover-shadow">
                                        {isSingup ? 'Sing In' : 'Sing Up'}

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
export default Login