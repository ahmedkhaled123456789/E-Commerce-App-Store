/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

const SearchBar = ({
  setSearchQuery,
  searchQuery,
  debouncedValue,
  setDebouncedValue,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchQuery);
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex items-center mb-5">
      <input
        type="text"
        placeholder="بحث..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-10 py-2 text-base border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
      <div
        onClick={handleSearch}
        className="absolute right-4 text-gray-400 cursor-pointer hover:text-gray-600"
      >
        {/* Search Icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.65-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
