// import { render, screen } from '@testing-library/react';
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdaptor from "@wojtekmaj/enzyme-adapter-react-17";
import * as React from "react";
Enzyme.configure({
  adapter: new EnzymeAdaptor(),
});
const setup = () => shallow(<App />);

const findByDataAttribute = (wrapper, attr) =>
  wrapper.find(`[data-test='${attr}']`);

const hasLengthOneByDataAttribute = (attr) => {
  const wrapper = setup();
  expect(findByDataAttribute(wrapper, attr).length).toBe(1);
};

test("renders without crashing", () => {
  hasLengthOneByDataAttribute("component-app");
});
test("renders button", () => {
  hasLengthOneByDataAttribute("increment-button");
});
test("renders counter display", () => {
  hasLengthOneByDataAttribute("counter-display");
});
test("renders decrement button", () => {
  const wrapper = setup();
  const btn = findByDataAttribute(wrapper, 'decrement-button');
  expect(btn.length).toBe(1);
})
test("initial counter is zero", () => {
  const wrapper = setup();
  const counterValue = findByDataAttribute(wrapper, "counter-value").text();
  expect(counterValue).toBe('0');
});
test("click updates counter display", () => {
  const wrapper = setup();
  const button = findByDataAttribute(wrapper, "increment-button");
  button.simulate('click');
  const counterValue = findByDataAttribute(wrapper, "counter-value").text();
  expect(counterValue).toBe('1');
});
test("No count below 0", () => {
  const wrapper = setup();
  const btn = findByDataAttribute(wrapper, 'decrement-button');
  btn.simulate('click');
  const error = findByDataAttribute(wrapper, 'decrement-error');
  expect(error.length).toBe(1);
})
test("error goes away on increment", () => {
  const wrapper = setup();
  const btn = findByDataAttribute(wrapper, 'decrement-button');
  btn.simulate('click');
  const error = findByDataAttribute(wrapper, 'decrement-error');
  expect(error.length).toBe(1);
  const button = findByDataAttribute(wrapper, "increment-button");
  button.simulate('click');
  const errorAfter = findByDataAttribute(wrapper, 'decrement-error');
  expect(errorAfter.length).toBe(0);
})
test("decrement updates counter display", () => {
  const wrapper = setup();
  const button = findByDataAttribute(wrapper, "increment-button");
  button.simulate('click');
  const counterValue = findByDataAttribute(wrapper, "counter-value").text();
  expect(counterValue).toBe('1');
  const decBtn = findByDataAttribute(wrapper, 'decrement-button');
  decBtn.simulate('click');
  const counterValueUpdated = findByDataAttribute(wrapper, "counter-value").text();
  expect(counterValueUpdated).toBe('0');
});
