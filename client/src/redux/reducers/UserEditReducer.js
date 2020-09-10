// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  user: {}
};

// Reducer
export default function UserEditReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}