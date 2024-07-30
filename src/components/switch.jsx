import { useCallback, useEffect, useState } from "react";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import HeroIcon from "../assets/icons/heroIcon";
import { useApiContext } from "./context/apiContext";

export default function Switch() {
  const { filteredData, setFilteredData, normalData, setLoading } =
    useApiContext();
  const [favoriteList, setFavoriteList] = useState(false);

  const filterToFavorite = () => {
    const filtered = filteredData.filter((item) => item.favorite === true);
    if (filtered.length > 0) {
      setFilteredData(filtered);
      setFavoriteList(true);
    } else {
      setLoading({
        active: true,
        type: "noFavorite",
      });
      setFavoriteList(false);
      setFilteredData(normalData);
    }
  };
  const filterToOrder = () => {
    const updatedData = normalData
      .map((item) => {
        const foundItem = filteredData.find(
          (filteredItem) => filteredItem.id === item.id
        );
        return foundItem ? foundItem : item;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
    setFilteredData(updatedData);
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
              onChange={
                !favoriteList ? () => filterToFavorite() : () => filterToOrder()
              }
              type="checkbox"
              name="switch"
              id=""
              defaultCheked={false}
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
            value={!favoriteList ? "name" : "favorite"}
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
