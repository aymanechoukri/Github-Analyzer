import { useState } from "react";
import { FaGithub, FaSearch } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

export default function SearchBar({ onSearch, loading }) {
  const [username, setUsername] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    if (!trimmedUsername) return;
    onSearch(trimmedUsername);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full max-w-2xl items-center gap-0 rounded-2xl bg-white shadow-xl shadow-gray-200/70 ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl focus-within:ring-2 focus-within:ring-black/20"
    >
      <div className="flex items-center pl-5 pr-3 text-gray-400">
        <FaGithub className="h-6 w-6" />
      </div>

      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 bg-transparent py-4 text-base text-gray-800 placeholder:text-gray-400 outline-none"
      />

      <div className="flex items-center pr-2">
        <button
          type="submit"
          disabled={loading || !username.trim()}
          className="group relative flex items-center gap-2 rounded-xl bg-linear-to-r from-gray-900 to-black px-6 py-2.5 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-400/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? (
            <>
              <FiLoader className="h-4 w-4 animate-spin" />
              <span>Searching</span>
            </>
          ) : (
            <>
              <FaSearch className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Search</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
