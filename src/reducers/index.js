import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import { combineReducers } from "redux";
import editMessage from "./editMessage";
export default combineReducers({
  user,
  contacts,
  activeUserId,
  typing,
  messages,
  editMessage,
});
