import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  SUBMIT_EDITED_MESSAGE,
  EDIT_MESSAGE,
} from "./constants/action-types";

export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const setTypingValue = (value) => ({
  type: SET_TYPING_VALUE,
  payload: value,
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
  },
});

export const saveClickedMessage = (messageId, userId) => ({
  type: EDIT_MESSAGE,
  payload: {
    userId,
    messageId,
  },
});

export const writeEditedMessage = (userId, messageId, message) => ({
  type: SUBMIT_EDITED_MESSAGE,
  payload: {
    userId,
    messageId,
    message,
  },
});
