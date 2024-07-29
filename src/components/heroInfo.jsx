import FavoriteIconEmpty from "../assets/icons/favoriteEmptyIcon";
import ComicsIcon from "../assets/icons/comicIcon";
import VideoIcon from "../assets/icons/videoIcon";

import { DateFormatter } from "./dateFormatter";
import { RatingSystem } from "./ratingSystem";

export default function HeroInfo({ data }) {
  const dataImage =
    data.thumbnail.path + "/portrait_xlarge." + data.thumbnail.extension;
  return (
    <section className="heroInfo">
      {/* details */}
      <div className="details">
        <div className="description">
          <div
            className={`nameIcon ${data.name.length > 10 ? "largeName" : ""}`}
          >
            <h1>{data.name}</h1>
            <FavoriteIconEmpty />
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
              <img src={dataImage} alt={item.name} />
              <p>{item.name}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
