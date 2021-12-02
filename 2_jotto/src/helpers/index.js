export const getLetterMatchCount = (guessedWord, secretWord) => {
  const letters = secretWord.split("");
  const guessedLetterSet = new Set(guessedWord);
  return letters.filter(letter => guessedLetterSet.has(letter)).length;
};
