import ChatContainer from "../components/ChatContainer";
import ChatsList from "../components/Chats-list";
import DeadLine from "../components/DeadLine";
import OrderDetails from "../components/OrderDetails";

const Chat = () => {

 

    return (
        <div className="chat">
            <div className="side-left">
                <ChatsList />
            </div>
            <div className="side-center">
                <ChatContainer />

                {

                }
            </div>
            <div className="side-right">
                <DeadLine />

                <OrderDetails />
            </div>
        </div>
    );
}

export default Chat;