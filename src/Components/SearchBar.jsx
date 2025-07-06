const SearchBar = ({
  location,
  onLocationChange,
  onSearch,
  suggestions,
  showSuggestions,
  selectedSuggestionIndex,
  onSuggestionClick,
  onKeyDown,
  onInputFocus,
  onInputBlur,
  locationDisplay,
}) => {
  return (
    <div className="search">
      <div className="search-top">
        <i className="fa-solid fa-location-dot"></i>
        <div className="location">{locationDisplay}</div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={onLocationChange}
          onKeyDown={onKeyDown}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
        <i className="fa-solid fa-magnifying-glass" onClick={onSearch}></i>
        {showSuggestions && suggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`suggestion-item ${
                  index === selectedSuggestionIndex ? "selected" : ""
                }`}
                onClick={() => onSuggestionClick(suggestion)}
              >
                <i className="fa-solid fa-location-dot"></i>
                <span>{suggestion.displayName}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
