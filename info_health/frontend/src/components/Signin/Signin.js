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
const Signin = () => {

    const [form, setForm] = useState(initialState)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        window.location.href='./signup'
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url =  'http://localhost:4000/auth/singin' 
            
            const { data } = await Axios.post(
                url,
                {
                    ...form

                }
            );
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
                            <h2>Account Login</h2>
                        </div>
                        <img src={image} className="mx-auto d-block m-4 logo" alt="Logo" />
                        <div className="card-body">
                            <form onSubmit={handleSubmit} method="POST">
                                
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