import ChatItem from "./ChatItem";

const ChatsList = () => {
    return (
        <section className="chats-list">
            <ChatItem active={"active"} />
            <ChatItem active={""} />
        </section>
    );
}

export default ChatsList;