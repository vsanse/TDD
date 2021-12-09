import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
};

export const getSecretWord = () => {
  //TODO: //write actual redux/context implementation
  return axios.get("http://localhost:3030").then((res) => res.data);
};
