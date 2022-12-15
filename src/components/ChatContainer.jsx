import Messege from "./Message";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import axios from "axios";

const ChatContainer = () => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    const [token, setToken] = useState(window.localStorage.getItem("LOGIN_TOKEN").replaceAll('"', ''));

    const [username, setUsername] = useState('username');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    let allMessages = [];

    useEffect(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher('9b8aca9f5ff5adc795c7', {
            cluster: 'eu',
            encrypted: true
        });
        const channel = pusher.subscribe('chat');
        channel.bind('App\\Events\\MessageSent', function (data) {
            console.log(data)
            allMessages.push(data?.message);
            setMessages(allMessages);
        });
    }, []);

    const submit = async e => {
        e.preventDefault();

        const send = await axios.post(`https://588d-156-221-8-173.eu.ngrok.io/slmeart/public/api/add_msg`,
            JSON.stringify({ body: message, sender_id: 1, receiver_id: 2 }),
            {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            }
        );

        setMessage('')
    }

    return (
        <div className="chat-container">
            <div className="top-title">
                <div className="state">
                    <span className="in-progress">
                        in progress
                    </span>
                </div>
                <div className="date">
                    <span>
                        Nov. 13
                    </span>
                </div>
            </div>
            <div className="chat-body">

                <div className="day">
                    <span>Sunday</span>
                </div>

                { messages.map((message) => (
                    <>

                        <Messege message={ message } username={ username } time={ time } />

                    </>
                )) }

            </div>

            <form onSubmit={ e => submit(e) }>
                <div className="text">
                    <input type="text" placeholder="Type.." onChange={ (e) => setMessage(e.target.value) }
                        value={ message } />
                </div>
                <div className="buttons">
                    <span>
                        {/* <button className="add-photo">
                            <i class="fa-solid fa-image"></i>
                        </button> */}
                    </span>

                    <span>
                        <button><i class="fa-solid fa-paper-plane"></i>send</button>
                    </span>
                </div>
            </form>

            <script src="https://js.pusher.com/7.0/pusher-with-encryption.min.js"></script>

        </div>
    );
}

export default ChatContainer;