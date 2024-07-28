import React from "react";
import Header from "../components/header";
import SearchSection from "../components/searchSection";
import Switch from "../components/switch";
import GetHeroesList from "../components/API/getHeroes";
export default function Home() {
  return (
    <main className="home">
      <div className="content">
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
          <GetHeroesList />
        </section>
      </div>
    </main>
  );
}
