import React from "react";
import PropTypes from "prop-types";
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = ({ success })  => {
  return (
    <div data-test="component-congrats">
      {success && (
        <p data-test="congrats-message" className="alert alert-success">
          Congratulations! You guessed the word!
        </p>
      )}
    </div>
  );
}
Congrats.propTypes =  {
    success: PropTypes.bool.isRequired
}

export default Congrats;