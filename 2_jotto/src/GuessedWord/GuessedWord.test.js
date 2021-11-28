import React from "react";
import { shallow } from "enzyme";
import GuessedWord from "./GuessedWord";
import { checkProps, findByTestAttr } from "../../test/testUtils";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "lucky",
      letterMatchCount: 3,
    },
  ],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWord {...setupProps} />);
};

test("renders without crashing with expected props", () => {
  checkProps(GuessedWord, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without crashing", () => {
    const component = findByTestAttr(wrapper, "component-guessedWord");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "game-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});
describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
    {
      guessedWord: "agile",
      letterMatchCount: 1,
    },
    {
      guessedWord: "party",
      letterMatchCount: 5,
    },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without crashing", () => {
    const component = findByTestAttr(wrapper, "component-guessedWord");
    expect(component.length).toBe(1);
  });
  test("renders guessed words section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  test("renders correct number of guessed words", () => {
    const guessedWordsItem = findByTestAttr(wrapper, "guessed-words-item");
    expect(guessedWordsItem.length).toBe(guessedWords.length);
  });
});
