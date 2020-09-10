// Dependencies
import * as types from "../actionTypes";
import SecurityService from "../../security/SecurityService";

// Init
const initialState = {
  user: SecurityService.getUser()
};

// Reducer
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_USER_SUCCESS:
      if (state.user._id === action.payload._id)
        return {
          ...state,
          user: {
            ...state.user,
            name: action.payload.name,
            surname: action.payload.surname,
            mail: action.payload.mail
          }
        };
      else return state;
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case types.LOGOUT_SUCCESS:
      return { ...state, user: null };
    default:
      return state;
  }
}
