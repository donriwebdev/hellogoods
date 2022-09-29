import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ product:{name}}) => {
  return (
    <div className="search">
      <Link href={`/product/${slug.current}`}>
          <input
            type="search"
            value=""
            autoComplete="off"
            className="searchBar"
            maxLength={100}
          />
          <button className="search-btn">
            <AiOutlineSearch />
          </button>
      </Link>
    </div>
  );
};

export default SearchBar;
