// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function UserListReducer(state = initialState, action) {
  switch (action.type) { 
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    default:
      return state;
  }
}