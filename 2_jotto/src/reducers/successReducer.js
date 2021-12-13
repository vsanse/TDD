import { actionTypes } from "../actions";

export default function successReducer(state = false, action) {
  if (action.type === actionTypes.CORRECT_GUESS) {
    return true;
  } else {
    return state;
  }
}
