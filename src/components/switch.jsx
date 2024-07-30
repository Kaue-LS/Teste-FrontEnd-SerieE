import { useCallback, useEffect, useState } from "react";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import HeroIcon from "../assets/icons/heroIcon";
import { useApiContext } from "./context/apiContext";
export default function Switch() {
  const { filteredData, setFilteredData, normalData } = useApiContext();
  const data = filteredData;
  const [favoriteList, setFavoriteList] = useState(false);
  const [prev, setPrev] = useState(favoriteList);

  console.log(prev, favoriteList);
  const filterFavoriteData = useCallback(() => {
    const filtered = data.filter((item) => {
      return item.favorite === true;
    });
    console.log(filtered);
    setFilteredData(filtered);
  }, [data, setFilteredData]);

  const filterAlphabeticalData = useCallback(() => {
    console.log({ normalData });
    setFilteredData(normalData);
    setFavoriteList(false);
    setPrev(false);
  }, [normalData, setFilteredData]);

  const handleFavorite = () => {
    setPrev(favoriteList);
    setFavoriteList(!favoriteList);
  };

  useEffect(() => {
    if (favoriteList) filterFavoriteData();
    if (!favoriteList && favoriteList !== prev) filterAlphabeticalData();
  }, [favoriteList, filterFavoriteData, filterAlphabeticalData, prev]);

  return (
    <div className="switch">
      <div className="content">
        <div className="totalHeroes">
          <p>Encontrados {data.length} heróis</p>
        </div>
        <div className="switchOptions desktop">
          <div className="nameOption">
            <div className="heroIcon">
              <span>
                <HeroIcon />
              </span>
            </div>
            <p>Ordenar por nome- A/Z</p>
          </div>
          <div className="switchButton">
            <input
              onClick={() => handleFavorite(!favoriteList)}
              type="checkbox"
              name="switch"
              id=""
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
          <select>
            <option defaultChecked value="name">
              Ordenar por nome - A/Z
            </option>
            <option value="favorite">Somente favoritos</option>
          </select>
        </div>
      </div>
    </div>
  );
}
