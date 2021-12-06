import { mount } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../../test/testUtils";
import App from "../../App";

const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  //add a value to input box
  const inputBox = findByTestAttr(wrapper, "input-box");
  // submit entered value
  inputBox.simulate("change", { target: { value: "train" } });

  //submit
  const submitBtn = findByTestAttr(wrapper, "submit-button");
  submitBtn.simulate("click", { preventDefault() {} });
  return wrapper;
};

describe.skip("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("should render guessed words table with one row", () => {
    const tableItems = findByTestAttr(wrapper, "guessed-words-item");
    expect(tableItems).toHaveLength(1);
  });
});
describe.skip("some words have been guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [
        {
          guessedWord: "agile",
          letterMatchCount: 1,
        },
      ],
    });
  });
  test("should render guessed words table with two rowś", () => {
    const tableItems = findByTestAttr(wrapper, "guessed-words-item");
    expect(tableItems).toHaveLength(2);
  });
});
describe.skip("guessed the secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [
        {
          guessedWord: "agile",
          letterMatchCount: 1,
        },
      ],
    });
    //add a value to input box
    const inputBox = findByTestAttr(wrapper, "input-box");
    // submit entered value
    inputBox.simulate("change", { target: { value: "party" } });

    //submit
    const submitBtn = findByTestAttr(wrapper, "submit-button");
    submitBtn.simulate("click", { preventDefault() {} });
  });
  test("should render guessed words table with three rows", () => {
    const tableItems = findByTestAttr(wrapper, "guessed-words-item");
    expect(tableItems).toHaveLength(3);
  });
  test("should render congrats component", () => {
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text()).not.toBe("");
  });
  test("should not render input component contents", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);
    const submitBtn = findByTestAttr(wrapper, "submit-button");
    expect(submitBtn.exists()).toBe(false);
  });
});
