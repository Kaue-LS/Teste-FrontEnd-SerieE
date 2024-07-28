import React from "react";
import SearchIcon from "../assets/lupa/searchIcon";
export default function SearchSection() {
  return (
    <section className="search">
      <div className="content">
        <button className="iconButton">
          <span>
            <SearchIcon />
          </span>
        </button>
        <input
          className="searchBar"
          type="text"
          placeholder="Procure por heróis"
        />
      </div>
    </section>
  );
}
