export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <div className="searchIcon" aria-hidden="true">
        <img className="searchImage" src="https://img.icons8.com/?size=100&id=132&format=png&color=FFFFFF" alt="Search" />
      </div>

      <input
        className="searchInput"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search games..."
      />

      <button className="clearBtn" onClick={() => onChange("")} aria-label="Clear search">
        ✕
      </button>
    </div>
  );
}
