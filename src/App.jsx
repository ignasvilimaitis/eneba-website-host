import { useMemo, useState } from "react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import "./App.css";

const MOCK = [
  { id: 1, title: "Split Fiction EA App Key (PC) GLOBAL", region: "GLOBAL", price: "€40.93" },
  { id: 2, title: "Red Dead Redemption 2 (PC) Key", region: "EUROPE", price: "€19.99" },
  { id: 3, title: "FIFA 23 (PC) Key", region: "GLOBAL", price: "€12.49" },
];

export default function App() {
  const [query, setQuery] = useState("split fiction");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK;
    return MOCK.filter((x) => x.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="page">
      <Header query={query} onQueryChange={setQuery} />
      <main className="wrap">
        <div className="resultsMeta">Results found: {filtered.length}</div>
        <GameGrid items={filtered} />
      </main>
    </div>
  );
}
