"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  setSearch(searchValue);

  return (
    <div className="mb-4">
      {/* search cars */}
      <div className="flex items-center justify-between border border-gray-400 focus-within:border-primary rounded-full overflow-hidden max-w-96 ">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          name="search"
          className="w-full px-2 outline-none"
          placeholder="Search cars...."
        />
        <button
          onClick={() => setSearch(searchValue)}
          className="bg-primary py-3 px-2 w-12 flex items-center justify-center text-white cursor-pointer"
        >
          <IoSearchSharp />
        </button>
      </div>
    </div>
  );
};

export default Search;
