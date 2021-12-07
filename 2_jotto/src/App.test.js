import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";
import { getSecretWord as mockGetSecretWord } from "./actions";

// activate global mock for getSecretWord
jest.mock("./actions");

const setup = () => mount(<App />);
test("renders without crashing", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.text().length).not.toBe(0);
});

describe("getSecretWord", () => {
  beforeEach(() => {
    // clear mockGetSecretWord
    mockGetSecretWord.mockClear();
  });
  test("should get secret word on mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("should not update word on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    // to update wrapper
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
