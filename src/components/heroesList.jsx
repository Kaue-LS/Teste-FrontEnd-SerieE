import React, { useEffect } from "react";
import FavoriteEmptyIcon from "../assets/icons/favoriteEmptyIcon";
import { Link } from "react-router-dom";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import { useApiContext } from "./context/apiContext";
import LoadingSystem from "./loading";

export default function HeroesList() {
  const {
    filteredData,
    setFilteredData,
    pageSelect,
    slicedPage,
    setSlicedPage,
  } = useApiContext();

  const ApplyFavorite = (itemId) => {
    const updatedSlicedPage = slicedPage.map((page) => {
      const updatedItems = page.items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            favorite: true,
          };
        }
        return item;
      });
      return {
        ...page,
        items: updatedItems,
      };
    });
    setSlicedPage(updatedSlicedPage);

    const updatedFilteredData = filteredData.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          favorite: true,
        };
      }
      return item;
    });
    setFilteredData(updatedFilteredData);
  };

  const RemoveFavorite = (itemId) => {
    const updatedSlicedPage = slicedPage.map((page) => {
      const updatedItems = page.items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            favorite: false,
          };
        }
        return item;
      });
      return {
        ...page,
        items: updatedItems,
      };
    });
    setSlicedPage(updatedSlicedPage);

    const updatedData = slicedPage[pageSelect].items.map((item) => {
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

  return slicedPage.length ? (
    <section className="heroesList">
      <div className="content">
        {slicedPage[pageSelect].items.map((item) => (
          <div key={item.id} className="card">
            <div className="image">
              <Link to={`/${item.id}`}>
                <img
                  loading={"lazy"}
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
  ) : (
    <LoadingSystem />
  );
}
