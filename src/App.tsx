import "./App.css";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import GameMap from "./components/GameMap/GameMap";

function App() {
  return (
    <>
      <main>
        <CharacterForm />
        <GameMap />
      </main>
      <p>
        To move character use arrows keys and make sure you don't focus any
        input.
        <br />
        (focused input have blue shadow like this element)
      </p>
    </>
  );
}

export default App;
