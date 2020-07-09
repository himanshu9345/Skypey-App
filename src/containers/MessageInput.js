import React from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";
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
  const { typing, activeUserId } = store.getState();
  console.log(typing, activeUserId, "gg");
  store.dispatch(sendMessage(typing, activeUserId));
};

export default MessageInput;
