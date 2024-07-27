import FavoriteIcon from "../assets/icons/favoriteIcon";
import HeroIcon from "../assets/icons/heroIcon";

export default function Switch() {
  return (
    <div>
      <div>
        <span>
          <HeroIcon />
        </span>
        <p>Ordenar por nome- A/Z</p>
      </div>
      <div>
        <button>Switch</button>
      </div>
      <div>
        <span>
          <FavoriteIcon />
        </span>
        <p>Somente favoritos</p>
      </div>
    </div>
  );
}
