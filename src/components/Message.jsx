import Avatar from './Avatar';

const Messege = ({ message, username, time }) => {
    return (
        <>

            { message && (
                <div div className="message">
                    <Avatar />
                    { console.log(message) }

                    <div className="message-container">
                        <div className="user">

                            <div className="user-name">{ username }</div>

                            <span className="message-date">{ time }</span>
                        </div>

                        <p className="message-body">
                            { message }
                        </p>
                    </div>
                </div>
            )
            }
        </>
    );
}

export default Messege;