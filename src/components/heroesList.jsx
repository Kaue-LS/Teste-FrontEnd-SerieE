import React from "react";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import { Link } from "react-router-dom";

export default function HeroesList({ data }) {
  console.log(data);
  return data ? (
    <section>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>
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
            <div>
              <Link to={`/${item.id}`}>
                <p>{item.name}</p>
              </Link>
              <FavoriteIcon />
            </div>
          </div>
        );
      })}
    </section>
  ) : (
    <p>Teste</p>
  );
}
