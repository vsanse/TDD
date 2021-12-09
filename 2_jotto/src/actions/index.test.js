import moxios from "moxios";
import { actionTypes, correctGuess, getSecretWord } from "./";

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("should return secret word", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe("party");
    });
  });
});
describe("coorectGuess", () => {
  test("should return action with type CORRECT_GUES", () => {
    const action = correctGuess();
    expect(action).toStrictEqual({type: actionTypes.CORRECT_GUESS});
  });
});
