import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from 'axios';

import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";


const Login = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [token, setToken] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setShowForm(false)

        try {

            const response = await axios.post(``,
                JSON.stringify({ email, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            setToken(response?.data?.token);

            setAuth({ email, pwd });

        }
        catch (err) {
            setErrMsg(err?.response?.data?.message);
            errRef.current.focus();
        }
    }

    useEffect(() => {
        window.localStorage.setItem('LOGIN_TOKEN', JSON.stringify(token));
    }, [token]);

    return (
        <>
            { !token ?
                (
                    <section className='sign-form'>
                        <p ref={ errRef } className={ errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{ errMsg }</p>
                        <div className="section-title">
                            <img src={ logo } alt="logo" />
                            <h3>Spice up your creating process</h3>
                        </div>
                        <form onSubmit={ handleSubmit }>

                            <div className="text">
                                <input
                                    type="email"
                                    id="email"
                                    ref={ userRef }
                                    autoComplete="off"
                                    onChange={ (e) => setEmail(e.target.value) }
                                    value={ email }
                                    placeholder="enter your e-mail *"
                                    required
                                />
                            </div>

                            <div className="text">
                                <input
                                    type="password"
                                    id="password"
                                    onChange={ (e) => setPwd(e.target.value) }
                                    value={ pwd }
                                    placeholder="password *"
                                    required
                                />
                            </div>

                            <button>Login</button>
                            <span className="line">
                                <a href="#">forgot password?</a>
                            </span>


                            <hr />
                            <span className="line">
                                <p>
                                    this site is protected by reCAPATCHA Enterprise and the Google <a href="#0">privacy policy</a> and <a href="#0">terms of service</a> apply
                                </p>
                            </span>
                        </form>

                    </section>
                ) : navigate('/')
            }

        </>
    );
}

export default Login;