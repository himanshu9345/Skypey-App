import {
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  SUBMIT_EDITED_MESSAGE,
  SET_ACTIVE_USER_ID,
} from "../actions/constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    case SUBMIT_EDITED_MESSAGE:
      return "";
    case SET_ACTIVE_USER_ID:
      return "";
    default:
      return state;
  }
}
