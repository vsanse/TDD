import React from "react";
import { shallow } from "enzyme";
import WordInput from "./WordInput";
import { checkProps, findByTestAttr } from "../../test/testUtils";

const mockSetCurrentGuess = jest.fn();

// Mock react with jest
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

const defaultProps = {
  secretWord: "",
};
const setup = (props) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<WordInput {...setupProps} />);
};
describe("render", () => {
  describe("when success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test("renders without crashing", () => {
      const component = findByTestAttr(wrapper, "component-word-input");
      expect(component.length).toBe(1);
    });
    test("render correctly with expected props", () => {
      checkProps(WordInput, defaultProps);
    });
    test("should not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("should not render submit button", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-button");
      expect(submitBtn.exists()).toBe(false);
    });
  });
  describe("when success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("renders without crashing", () => {
      const component = findByTestAttr(wrapper, "component-word-input");
      expect(component.length).toBe(1);
    });
    test("render correctly with expected props", () => {
      checkProps(WordInput, defaultProps);
    });
    test("should render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("should render submit button", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-button");
      expect(submitBtn.exists()).toBe(true);
    });
  });
});

describe("state change on input value change", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("should update input value on change", () => {
    const input = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "hello" } };
    input.simulate("focus");
    input.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("hello");
  });
  test("should clear input on submit", () => {
    const submitBtn = findByTestAttr(wrapper, "submit-button");
    submitBtn.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
