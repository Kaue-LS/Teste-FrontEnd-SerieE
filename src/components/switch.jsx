import { useEffect, useState } from "react";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import HeroIcon from "../assets/icons/heroIcon";
import { useApiContext } from "./context/apiContext";

export default function Switch() {
  const { filteredData, normalData, setLoading, slicedPage, setSlicedPage } =
    useApiContext();
  const [favoriteList, setFavoriteList] = useState(false);
  const [prevList, setPrevList] = useState([]);
  const handleSwitchChange = () => {
    if (favoriteList) {
      filterToOrder();
    } else {
      filterToFavorite();
    }
  };
  const filterToFavorite = () => {
    setPrevList(slicedPage);
    const allItems = slicedPage.flatMap((page) => page.items);

    const filteredFavorites = allItems.filter((item) => item.favorite === true);

    const totalPages = Math.ceil(filteredFavorites.length / 20);
    const newPages = Array.from({ length: totalPages }, (_, index) => {
      const startIndex = index * 20;
      const endIndex = startIndex + 20;
      return {
        pageNumber: index + 1,
        items: filteredFavorites.slice(startIndex, endIndex),
      };
    });

    if (newPages.length > 0) {
      setSlicedPage(newPages);
      setFavoriteList(true);
    } else {
      setLoading({
        active: true,
        type: "noFavorite",
      });
      setFavoriteList(false);
      setSlicedPage(normalData);
    }
  };
  const filterToOrder = () => {
    setSlicedPage(prevList);
    setFavoriteList(false);
  };
  return (
    <div className="switch">
      <div className="content">
        <div className="totalHeroes">
          <p>Encontrados {filteredData.length} heróis</p>
        </div>
        <div className="switchOptions desktop">
          <div className="nameOption">
            <div className="heroIcon">
              <span>
                <HeroIcon />
              </span>
            </div>
            <p>Ordenar por nome - A/Z</p>
          </div>
          <div className="switchButton">
            <input
              onChange={handleSwitchChange}
              type="checkbox"
              name="switch"
              id=""
              checked={favoriteList}
            />
          </div>
          <div className="favoriteOption">
            <div className="favoriteIcon">
              <span>
                <FavoriteIcon />
              </span>
              <p>Somente favoritos</p>
            </div>
          </div>
        </div>
        <div className="switchOptions mobile">
          <select
            onChange={(e) => {
              if (e.target.value === "favorite") {
                filterToFavorite();
              } else {
                filterToOrder();
              }
            }}
            value={favoriteList ? "favorite" : "name"}
            defaultValue={"name"}
          >
            <option value="name">Ordenar por nome - A/Z</option>
            <option value="favorite">Somente favoritos</option>
          </select>
        </div>
      </div>
    </div>
  );
}
