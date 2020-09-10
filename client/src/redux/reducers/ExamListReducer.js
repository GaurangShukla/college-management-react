// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function examListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_EXAM_SUCCESS:
      return { ...state, exam: action.payload };
    case types.LIST_EXAM_SUCCESS:
      return { ...state, listExam: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}