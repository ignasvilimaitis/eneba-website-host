import { useEffect, useState } from "react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import "./App.css";
import { gameLoad } from "./components/GameLoad";

export default function App() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameLoad(query).then(setGames).catch(console.error);
  }, [query]);

  return (
    <div className="page">
      <Header query={query} onQueryChange={setQuery} />
      <main className="wrap">
        <div className="resultsMeta">Results found: {games.length}</div>
        <GameGrid items={games} />
      </main>
    </div>
  );
}
