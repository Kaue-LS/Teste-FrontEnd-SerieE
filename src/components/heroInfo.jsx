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
          <div className="nameIcon">
            <h1>{data.name}</h1>
            <FavoriteIconEmpty />
          </div>
          <div className="about">
            <p>{data.description}</p>
          </div>
          <div className="shows-rating">
            <div className="comicSeries">
              <div>
                <span>Quadrinhos</span>
                <div>
                  <ComicsIcon />
                  {data.comics.available}
                </div>
              </div>
              <div>
                <span>Filmes</span>
                <div>
                  <VideoIcon />
                  {data.stories.available}
                </div>
              </div>
            </div>
            <div className="rating">
              <span>rating: </span>
              <RatingSystem />
            </div>
            <div className="lastComic">
              <p>Ultimo quadrinho: {DateFormatter(data.modified)}</p>
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
      <section aria-labelledby="latest-releases">
        <h2 id="latest-releases">Últimos lançamentos</h2>

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
