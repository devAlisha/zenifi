import { Search } from "lucide-react";
import { useState } from "react";
import Filter from "../filter/Filter";

export default function SearchBox({ setSearchTerm }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    setSearchTerm(input);
  };

  return (
    <div className="rounded-xl lg:rounded-full bg-secondary-100 p-2">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <form className="max-w-xs">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 pl-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onChange={handleInputChange}
              value={searchInput}
            />
          </div>
        </form>
        <div>
          <Filter />
        </div>
      </div>
    </div>
  );
}
