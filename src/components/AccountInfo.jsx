import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import profile from "../assets/avatar.jpg"
import { useNavigate } from "react-router-dom";
import Avatar from './Avatar';

const AccountInfo = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [username, setUserName] = useState("");
    const [displayname, setDisplayname] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [tags, setTags] = useState("");
    const [topic, setTopic] = useState("");
    const [userImg, setUserImg] = useState(profile);


    const [verified, setVerified] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [token, setToken] = useState(window.localStorage.getItem("LOGIN_TOKEN").replaceAll('"', ''));
    const [userData, setUserData] = useState("");
    const [userDataFetched, setUserDataFetched] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, displayname, email, bio, tags, verified])


    const fetchUserData = async () => {
        if (!userDataFetched) setUserData(await axios.post(`https://53ea-41-45-2-209.eu.ngrok.io/slmeart/public/api/user_data`,
            JSON.stringify({}),
            {
                headers: { 'content-type': 'application/json', 'Authorization': `Bearer ${token}` }
            }
        ));

        console.log(userData?.data)
    }

    fetchUserData();

    useEffect(() => {
        setUserName(userData?.data?.name);
        setEmail(userData?.data?.email);
        setVerified(userData?.data?.email_verified_at);

        setUserDataFetched(true);
    }, [userData])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(token);

            const response = await axios.post(`https://53ea-41-45-2-209.eu.ngrok.io/slmeart/public/api/profile`,
                JSON.stringify({ img: userImg, email, username, displayName: displayname, bio, tags }),
                {
                    headers: { 'content-type': 'application/json', 'Authorization': `Bearer ${token}` }
                }
            )

            console.log(JSON.stringify(response?.data))

            navigate('/')

        } catch (err) {
            if (err?.response?.data?.message === "Unauthenticated.") {
                // navigate('/login');
            }
            setErrMsg(err?.response?.data?.message);
            console.log(err);
            errRef.current.focus();
        }

    }

    const imgLoad = (e) => {
        setUserImg(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <section className="profile-info content-section">
            <div className="section-title">
                <h2>
                    profile
                    <p ref={ errRef } className={ errMsg ? "errmsg" : "offscreen" } aria-live="assertive">{ errMsg }</p>

                </h2>
            </div>

            <form onSubmit={ handleSubmit }>
                <div className="profile-container">
                    <div className="profile-pic">
                        <span>profile picture</span>
                        <span>
                            <input type="file" accept="image/*" name="userImage" id="userImage" onChange={ imgLoad } />
                            {/* <label htmlFor="userImage"> <img id='preview' src={ userImg } alt="" className="profile" /></label> */ }
                            <label htmlFor="userImage"> <Avatar /></label>

                        </span>
                    </div>
                    <div className="username">
                        <span>username</span>
                        <span>
                            <input type="text" value={ username }
                                onChange={ (e) => setUserName(e.target.value) }
                                placeholder="fay" className="editable" />
                        </span>
                    </div>
                    <div className="display-name">
                        <span>display name</span>
                        <span>
                            <input type="text" value={ displayname }
                                onChange={ (e) => setDisplayname(e.target.value) }
                                placeholder="fay" className="editable" />
                        </span>
                    </div>
                    <div className="email">
                        <span>email</span>
                        <span>
                            <input type="email" ref={ userRef } value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                                placeholder="example@gmail.com" className="editable" />
                        </span>
                    </div>
                    <div className="email-verifed">
                        <span>email verifcation status</span>

                        {
                            verified === null ? (
                                <span className="fail">unverified</span>
                            )
                                :
                                (<span className="success">verifed</span>)
                        }
                    </div>
                    <div className="user-tags">
                        <span>user tags</span>
                        <span>
                            <textarea value={ tags }
                                onChange={ (e) => setTags(e.target.value) } name="" id="">
                                artist, illustrator, designer, creator
                            </textarea>
                        </span>
                    </div>
                    <div className="topics">
                        <span>topics</span>
                        <span>
                            <textarea value={ topic }
                                onChange={ (e) => setTopic(e.target.value) } name="" id="">
                                digital art
                            </textarea>
                        </span>
                    </div>
                    <div className="description">
                        <span>Bio</span>
                        <span>
                            <textarea value={ bio }
                                onChange={ (e) => setBio(e.target.value) } name="" id="">

                            </textarea>
                        </span>
                    </div>

                    <button>submit</button>
                </div>
            </form>
        </section>
    );
}

export default AccountInfo;