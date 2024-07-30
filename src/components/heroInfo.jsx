import { FavoriteEmptyIcon } from "../assets/icons/favoriteEmptyIcon";
import ComicsIcon from "../assets/icons/comicIcon";
import VideoIcon from "../assets/icons/videoIcon";

import { DateFormatter } from "./dateFormatter";
import { RatingSystem } from "./ratingSystem";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import { useApiContext } from "./context/apiContext";
import { useEffect, useState } from "react";

export default function HeroInfo({ data }) {
  const { filteredData, setFilteredData } = useApiContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const dataImage =
    data.thumbnail.path + "/portrait_xlarge." + data.thumbnail.extension;

  const ApplyFavorite = (itemId) => {
    const updatedData = filteredData.map((hero) => {
      if (hero.id === itemId) {
        return {
          ...hero,
          favorite: false,
        };
      }
      return hero;
    });
    setFilteredData(updatedData);
    setIsFavorite(true);
  };

  const RemoveFavorite = (itemId) => {
    const updatedData = filteredData.map((hero) => {
      if (hero.id === itemId) {
        return {
          ...hero,
          favorite: false,
        };
      }
      return hero;
    });
    setFilteredData(updatedData);
    setIsFavorite(false);
  };

  useEffect(() => {
    if (data.favorite === undefined) {
      data.favorite = false;
    }
    setIsFavorite(data.favorite);
  }, [data]);

  return (
    <section className="heroInfo">
      <div className="titleBackground">
        <span>{data.name}</span>
      </div>
      {/* details */}
      <div className="details">
        <div className="description">
          <div
            className={`nameIcon ${data.name.length > 10 ? "largeName" : ""}`}
          >
            <h1>{data.name}</h1>
            {isFavorite ? (
              <button className="teste" onClick={() => RemoveFavorite(data.id)}>
                <FavoriteIcon />
              </button>
            ) : (
              <button className="teste" onClick={() => ApplyFavorite(data.id)}>
                <FavoriteEmptyIcon />
              </button>
            )}
          </div>
          <div className="about">
            <p>{data.description}</p>
          </div>
          <div className="shows-rating">
            <div className="comicSeries">
              <div className="comics">
                <span>Quadrinhos</span>
                <div>
                  <ComicsIcon />
                  {data.comics.available}
                </div>
              </div>
              <div className="movies">
                <span>Filmes</span>
                <div>
                  <VideoIcon />
                  {data.stories.available}
                </div>
              </div>
            </div>
            <div className="rating">
              <span>Rating:</span>
              <RatingSystem />
            </div>
            <div className="lastComic">
              <span>
                Ultimo quadrinho: <p>{DateFormatter(data.modified)}</p>
              </span>
            </div>
          </div>
        </div>
        <aside className="thumbnail">
          {data.thumbnail && (
            <img
              loading={"lazy"}
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={`Thumbnail of ${data.name}`}
            />
          )}
        </aside>
      </div>

      {/* lançamentos */}
      <section className="latest-releases">
        <h2>Últimos lançamentos</h2>

        <div className="releases">
          {data.comics.items.map((item, index) => (
            <article key={index} className="release-item">
              <img loading={"lazy"} src={dataImage} alt={item.name} />
              <p>{item.name}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
