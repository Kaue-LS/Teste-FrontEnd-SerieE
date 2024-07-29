import React from "react";
import SearchIcon from "../assets/lupa/searchIcon";
export default function SearchSection({ page }) {
  return (
    <section className={`search ${page}`}>
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
