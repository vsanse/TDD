import "./App.css";
import Congrats from "./Congrats/Congrats";
import GuessedWord from "./GuessedWord/GuessedWord";

function App() {
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWord guessedWords={[{
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
    },]} />
    </div>
  );
}

export default App;
