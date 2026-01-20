import SearchBar from "./SearchBar";
import enebaLogo from "../assets/eneba-logo.png";

export default function Header({ query, onQueryChange }) {
  return (
    <header className="topbar">
      <div className="wrap topbarInner">
        <div className="brand">
            <img src={enebaLogo} alt="Eneba Logo" className="logo" />
        </div>
        <div className = "search-container">
                    <SearchBar value={query} onChange={onQueryChange} />
        <button className="langSwitch">
  🌍    <span className="langText">English EU | EUR</span>
        </button>
        </div>
        <div className="right">
          <button className="iconBtn">♡</button>
          <button className="iconBtn">🛒</button>
          <button className="avatar">🙂</button>
        </div>
      </div>
    </header>
  );
}
