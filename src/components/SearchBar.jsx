import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchBar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm, selectedCategory, sortBy);
    onSearchChange({
      searchTerm: searchTerm.trim(),
      selectedCategory,
      sortBy,
    });
  };
  return (
    <div className="container mx-auto px-4 py-8  bg-white ">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition duration-300 flex items-center space-x-2"
          >
            <span className="hidden sm:block">Search</span>
            <Search size={20} className="sm:hidden" />
          </button>
        </div>

        {/* <div className="block sm:hidden">
          <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg">
            <span>Filter and Sort</span>
            <ChevronDown className="transform transition-transform" />
          </button>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="">Select Category</option>
              <option value="tech">Technology</option>
              <option value="health">Health</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="sortBy"
            >
              Sort By
            </label>
            <select
              id="sortBy"
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="">Sort By</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
