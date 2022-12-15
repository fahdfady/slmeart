import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from 'axios';
import logo from "../assets/logo.png"
import { Link, Navigate } from "react-router-dom";

const Register = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [token, setToken] = useState("".replaceAll('"', ''));

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [firstName, email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post("https://588d-156-221-8-173.eu.ngrok.io/slmeart/public/api/register",
                JSON.stringify({ name: firstName, email, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            console.log(JSON.stringify(response?.data))
            setToken(response?.data?.token);


            setFirstName('');
            setEmail('');
            setPwd('');


        } catch (err) {
            setErrMsg(err?.response?.data?.message);

            // console.log(err?.response?.data?.message);
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
                                    type="first name"
                                    id="firstName"
                                    autoComplete="off"
                                    onChange={ (e) => setFirstName(e.target.value) }
                                    value={ firstName }
                                    placeholder="enter your first name *"
                                    required
                                />
                            </div>
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

                            <button>Sign Up</button>
                            <span className="line">
                                <p>
                                    already have an Account?<br />
                                    <Link to='/login'>Login</Link>
                                </p>
                            </span>

                            <span className="line">
                                <p>
                                    this site is protected by reCAPATCHA Enterprise and the Google <a href="#0">privacy policy</a> and <a href="#0">terms of service</a> apply
                                </p>
                            </span>
                        </form>

                    </section>
                ) : <Navigate to='/profile' />
            }

        </>
    );
}

export default Register;