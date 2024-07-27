import React from "react";
import SearchIcon from "../assets/lupa/searchIcon";
export default function SearchSection() {
  return (
    <section>
      <div>
        <button>
          <span>
            <SearchIcon />
          </span>
        </button>
        <input type="text" placeholder="Procure por heróis" />
        <div></div>
      </div>
    </section>
  );
}
