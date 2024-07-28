import React from "react";
import FavoriteEmptyIcon from "../assets/icons/favoriteEmptyIcon";
import { Link } from "react-router-dom";

export default function HeroesList({ data }) {
  console.log(data);
  return (
    <section className="heroesList">
      <div className="content">
        {data.map((item) => {
          return (
            <div key={item.id} className="card">
              <div className="image">
                <Link to={`/${item.id}`}>
                  <img
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
                <FavoriteEmptyIcon />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
