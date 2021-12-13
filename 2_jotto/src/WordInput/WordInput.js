import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const WordInput = ({ secretWord }) => {
  const [guess, setGuess] = useState("");
  const success = useSelector(state => state.success)
  const handleChange = ({ target: { value } }) => {
    setGuess(value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // update global guessed words array
    // check with secret words to know if success or fail
    setGuess("");
  };
  return (
    <div data-test="component-word-input">
      {success ? (
        <></>
      ) : (
        <form className="inline-form">
          <input
            type="text"
            className="mb-2 mx-sm-3"
            placeholder="enter guess"
            data-test="input-box"
            value={guess}
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            data-test="submit-button"
            className="btn btn-primary mb-2"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};
WordInput.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default WordInput;
