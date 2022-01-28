import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseAuth from "../../hooks/UseAuth";
import google from './../../assets/images/google.png'

const Login = () => {
    const { allContexts } = UseAuth();
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = allContexts;

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }




    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                setError(error.message)

            })
            .finally(() => {
                setIsLoading(false)
            })
    }





    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <div className="contact1 add-service d-flex justify-content-center custom-body p-4 bg-dark text-white">
            <div className="container-contact1 d-flex justify-content-center bg-secondary">
                <div className=" text-center bg-secondary">
                    <div className="">

                        <form onSubmit={handleLoginWithEmailAndPassword} className="contact1-form validate-form">
                            <span className="contact1-form-title text-white">
                                Login
                            </span>
                            <p className="text-danger text-center">{error}</p>

                            <div className="wrap-input1 validate-input">

                                <input className="input1" type="email" onBlur={handleGetEmail} placeholder="Your Email" />
                                <span className="shadow-input1"></span>
                            </div>
                            <div className="wrap-input1 validate-input" >
                                <input className="input1" type="password" onBlur={handleGetPassword} placeholder="Your Password" />
                                <span className="shadow-input1"></span>
                            </div>

                            <div className="container-contact1-form-btn">
                                <button type='submit' className="contact1-form-btn">
                                    <span>
                                        Login
                                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>


                        </form>
                        <br />
                        <button className="btn" onClick={handleGoogleLogin}> <img src={google} width="46px" alt="google-icon" /></button>

                        <br />
                        <h6 className="text-white"> New User ?<Link to="/signup"><h5 className="text-white">Please register</h5></Link ></h6>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;
















