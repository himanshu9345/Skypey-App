import {
  EDIT_MESSAGE,
  SEND_MESSAGE,
  SET_ACTIVE_USER_ID,
} from "../actions/constants/action-types";

// tellme whether current messege is edit version of some msg
export default (state = { isEditing: false, messageId: null }, action) => {
  switch (action.type) {
    case EDIT_MESSAGE:
      const { messageId } = action.payload;
      return { ...state, isEditing: true, messageId: messageId };
    case SEND_MESSAGE:
      return { ...state, isEditing: false, messageId: null };
    case SET_ACTIVE_USER_ID:
      return { ...state, isEditing: false, messageId: null };
    default:
      return state;
  }
};
