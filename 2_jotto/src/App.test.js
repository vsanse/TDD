import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.text().length).not.toBe(0);
});
