import { useState } from "react";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import HeroIcon from "../assets/icons/heroIcon";
import dataJson from "../components/API/application.json";
export default function Switch() {
  const data = dataJson;
  const [favoriteList, setFavoriteList] = useState(false);
  return (
    <div className="switch">
      <div className="content">
        <div className="totalHeroes">
          <p>Encontrados {data.data.count} heróis</p>
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
              onClick={() => setFavoriteList(!favoriteList)}
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
