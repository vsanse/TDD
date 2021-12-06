import "./App.css";
import Congrats from "./Congrats/Congrats";
import GuessedWord from "./GuessedWord/GuessedWord";
import WordInput from "./WordInput/WordInput";

function App() {
  // TODO: get props form shared state
  const success = false;
  const guessedWords = [];
  const secretWord = "party";
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <WordInput secretWord={secretWord} success={success} />
      <GuessedWord guessedWords={guessedWords} />
    </div>
  );
}

export default App;
