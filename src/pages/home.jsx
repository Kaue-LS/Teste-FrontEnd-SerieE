import React from "react";
import Header from "../components/header";
import SearchSection from "../components/searchSection";
import FavoriteIcon from "../assets/icons/favoriteIcon";
import Switch from "../components/switch";
import starLord from "../assets/starLord.png";
export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <SearchSection />

        <section>
          <div>
            <div>
              <p>Encontrados {20} heróis</p>
            </div>
            <Switch />
          </div>

          {/* Heroes List */}
          <section>
            <div>
              <div>
                <img src={starLord} alt="Star-Lord" />
              </div>
              <div>
                <p>Star-Lord</p>
                <FavoriteIcon />
              </div>
            </div>
            <div>
              <div>
                <img src={starLord} alt="Star-Lord" />
              </div>
              <div>
                <p>Star-Lord</p>
                <FavoriteIcon />
              </div>
            </div>
            <div>
              <div>
                <img src={starLord} alt="Star-Lord" />
              </div>
              <div>
                <p>Star-Lord</p>
                <FavoriteIcon />
              </div>
            </div>
            <div>
              <div>
                <img src={starLord} alt="Star-Lord" />
              </div>
              <div>
                <p>Star-Lord</p>
                <FavoriteIcon />
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
