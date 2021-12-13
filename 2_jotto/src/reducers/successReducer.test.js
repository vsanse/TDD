import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("should return false by default", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test("should return true when action type is CORRECT_GUESS", () => {
    const newState = successReducer(false, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});
test("should return previous state if action is unknown", () => {
    const newState = successReducer(false, {type: 'UNKNOWN'});
    expect(newState).toBe(false);
});
