import FavoriteIcon from "../assets/icons/favoriteIcon";
import HeroIcon from "../assets/icons/heroIcon";
import dataJson from "../components/API/application.json";
export default function Switch() {
  const data = dataJson;
  return (
    <div className="switch">
      <div className="content">
        <div className="totalHeroes">
          <p>Encontrados {data.data.count} heróis</p>
        </div>
        <div className="switchOptions">
          <div className="nameOption">
            <div className="heroIcon">
              <span>
                <HeroIcon />
              </span>
            </div>
            <p>Ordenar por nome- A/Z</p>
          </div>
          <div className="switchButton">
            <input type="checkbox" name="switch" id="" />
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
      </div>
    </div>
  );
}
