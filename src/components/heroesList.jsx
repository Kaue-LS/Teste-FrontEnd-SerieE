import React from "react";
import FavoriteIcon from "../assets/icons/favoriteIcon";

export default function HeroesList({ data }) {
  console.log(data);
  return (
    <section>
      {/* {data.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <img
                src={
                  item.thumbnail.path +
                  "/portrait_xlarge." +
                  item.thumbnail.extension
                }
                alt={item.name}
              />
            </div>
            <div>
              <p>{item.name}</p>
              <FavoriteIcon />
            </div>
          </div>
        );
      })} */}
    </section>
  );
}
