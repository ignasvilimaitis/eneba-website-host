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
          <img src="https://cdn-icons-png.flaticon.com/256/3973/3973535.png" alt="Language" className="langIcon" />
      <span className="langText">English EU | EUR</span>
        </button>
        </div>
        <div className="right">
          <button className="iconBtn">
            ♡
          </button>
          <button className="iconBtn"
          >
            🛒 
          </button>
          <button className="avatar">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" alt="User Avatar" className="avatarImage" />
          </button>
        </div>
      </div>
    </header>
  );
}
