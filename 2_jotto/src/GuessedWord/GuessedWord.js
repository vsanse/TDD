import React from "react";
import PropTypes from "prop-types";

const GuessedWord = ({ guessedWords }) => {
  return (
    <div data-test="component-guessedWord">
      {!!guessedWords.length ? (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm"> 
            <thead className="table-dark">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, idx) => (
                <tr
                  key={`guessed-words-item${idx}`}
                  data-test="guessed-words-item"
                >
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
