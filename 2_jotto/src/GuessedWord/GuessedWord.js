import React from "react";
import PropTypes from "prop-types";

const GuessedWord = ({ guessedWords }) => {
  return (
    <div data-test="component-guessedWord">
      {!!guessedWords.length ? (
        <div></div>
      ) : (
        <span data-test="game-instructions">Try to guess the secret word!</span>
      )}
    </div>
  );
};
GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }).isRequired
  ),
};
export default GuessedWord;
