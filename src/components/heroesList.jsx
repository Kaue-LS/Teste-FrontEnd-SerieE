import React, { useState, useEffect } from "react";
import FavoriteEmptyIcon from "../assets/icons/favoriteEmptyIcon";
import { Link } from "react-router-dom";
import FavoriteIcon from "../assets/icons/favoriteIcon";

export default function HeroesList({ data }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    setApiData(data);
  }, [data]);

  const ApplyFavorite = (itemId) => {
    const updatedData = apiData.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          favorite: true,
        };
      }
      return item;
    });
    setApiData(updatedData);
  };

  const RemoveFavorite = (itemId) => {
    const updatedData = apiData.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          favorite: false,
        };
      }
      return item;
    });
    setApiData(updatedData);
  };

  return (
    <section className="heroesList">
      <div className="content">
        {apiData.map((item) => (
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
                  Favorito
                </button>
              ) : (
                <button onClick={() => ApplyFavorite(item.id)}>
                  <FavoriteEmptyIcon />
                  Desfavorito
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
