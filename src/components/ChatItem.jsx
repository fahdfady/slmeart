import Avatar from './Avatar';

const ChatItem = ({ active }) => {
    return (
        <div className={ `chat-item ${active}` } >
            <Avatar />
            <div className="user">
                <div className="user-name">
                    Diane Chiange
                </div>

                <div className="state">
                    <span className="in-progress">
                        in progress
                    </span>
                </div>

                <div className="short-message">
                    <p>Diane:</p>
                    <p>Lorem ipsum dol...</p>
                </div>
            </div>
            <span className="date">
                Nov. 13
            </span>
        </div>
    );
}

export default ChatItem;