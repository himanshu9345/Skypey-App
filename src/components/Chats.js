import React, { Component } from "react";
import { setTypingValue, saveClickedMessage } from "../actions";

import "./Chats.css";
import store from "../store";

const Chat = ({ message }) => {
  const { text, is_user_msg, is_edited, number } = message;
  return (
    <span
      onClick={is_user_msg ? () => handleEdit(text, number) : null}
      className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
    >
      {text}
      {is_edited ? " (edited)" : ""}
    </span>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map((message) => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

function handleEdit(message, messageId) {
  // console.log("user chat cicked", number);
  const { activeUserId } = store.getState();
  store.dispatch(setTypingValue(message));
  store.dispatch(saveClickedMessage(messageId, activeUserId));
}

export default Chats;
