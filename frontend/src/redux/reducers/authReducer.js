import { SET_CURRENT_USER, REGESTER_USER } from "../constants/authConstants";

import isEmpty from "../../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  success: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload  
      };
    case REGESTER_USER:
      return {
        ...state,
        success: true,
      }
    default:
      return state;
  }
}