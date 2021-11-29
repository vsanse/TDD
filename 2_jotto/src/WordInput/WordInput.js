import React from "react";
import PropTypes from "prop-types";

const WordInput = ({
    secretWord
}) => {
  return <div data-test="component-word-input"></div>;
};
WordInput.propTypes = {
    secretWord: PropTypes.string.isRequired
};
export default WordInput;
