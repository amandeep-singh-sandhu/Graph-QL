import "./App.css";
import Character from "./pages/Character";
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
