import { getMessages } from "../static-data";
import {
  SEND_MESSAGE,
  SUBMIT_EDITED_MESSAGE,
} from "../actions/constants/action-types";
import _ from "lodash";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      console.log(message, userId, action);
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true,
            is_edited: false,
          },
        },
      };
    }
    case SUBMIT_EDITED_MESSAGE: {
      const { userId, messageId, message } = action.payload;
      const allUserMsgs = state[userId];

      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [messageId]: {
            number: messageId,
            text: message,
            is_user_msg: true,
            is_edited: true,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}
