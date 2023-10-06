import "./App.css";
import Character from "./pages/Character";
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router";
import Search from "./pages/Search";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
