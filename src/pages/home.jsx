import React from "react";
import Header from "../components/header";
import SearchSection from "../components/searchSection";
import Switch from "../components/switch";
import GetHeroesList from "../components/getHeroes";
import HeroesProvider from "../components/context/heroesContext";
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
          <HeroesProvider>
            <GetHeroesList />
          </HeroesProvider>
        </section>
      </div>
    </main>
  );
}
