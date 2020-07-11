import React from "react";
import store from "../store";
import { setTypingValue, sendMessage, writeEditedMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};
const handleSubmit = (e) => {
  e.preventDefault();
  const { typing, activeUserId, editMessage } = store.getState();
  if (!editMessage.isEditing) {
    console.log(typing, activeUserId, "new message from user");

    store.dispatch(sendMessage(typing, activeUserId));
  } else {
    store.dispatch(
      writeEditedMessage(activeUserId, editMessage.messageId, typing)
    );
  }
};

export default MessageInput;
