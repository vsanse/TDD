import React from "react";
import { shallow } from "enzyme";
import WordInput from "./WordInput";
import { checkProps, findByTestAttr } from "../../test/testUtils";

const defaultProps = {
  secretWord: "",
};
const setup = (props) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<WordInput {...setupProps} />);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-word-input");
  expect(component.length).toBe(1);
});

test("render correctly with expected props", () => {
  checkProps(WordInput, defaultProps);
});
