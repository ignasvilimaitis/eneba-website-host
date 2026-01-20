export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <div className="searchIcon" aria-hidden="true">🔍</div>

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
