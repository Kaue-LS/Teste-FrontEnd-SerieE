import React from "react";
import FavoriteEmptyIcon from "../assets/icons/favoriteEmptyIcon";
import { Link } from "react-router-dom";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import { useApiContext } from "./context/apiContext";

export default function HeroesList() {
  const { filteredData, setFilteredData } = useApiContext();

  const ApplyFavorite = (itemId) => {
    const updatedData = filteredData.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          favorite: true,
        };
      }
      return item;
    });
    setFilteredData(updatedData);
  };

  const RemoveFavorite = (itemId) => {
    const updatedData = filteredData.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          favorite: false,
        };
      }
      return item;
    });
    setFilteredData(updatedData);
  };

  return (
    <section className="heroesList">
      <div className="content">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <div className="image">
              <Link to={`/${item.id}`}>
                <img
                  src={
                    item.thumbnail.path +
                    "/portrait_xlarge." +
                    item.thumbnail.extension
                  }
                  alt={item.name}
                />
              </Link>
            </div>
            <div className="nameIcon">
              <Link to={`/${item.id}`}>
                <p>{item.name}</p>
              </Link>
              {item.favorite ? (
                <button onClick={() => RemoveFavorite(item.id)}>
                  <FavoriteIcon />
                </button>
              ) : (
                <button onClick={() => ApplyFavorite(item.id)}>
                  <FavoriteEmptyIcon />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
