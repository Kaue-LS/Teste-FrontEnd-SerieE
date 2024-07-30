import React from "react";
import Header from "../components/header";
import SearchSection from "../components/searchSection";
import Switch from "../components/switch";
import GetHeroesList from "../components/API/getHeroes";
import { useApiContext } from "../components/context/apiContext";
import Loading from "../components/loading";
export default function Home() {
  const { loading } = useApiContext();
  return (
    <main className="home">
      <div className="content">
        <Header />
        <SearchSection page={"home"} />
        <section>
          <Switch />
          {/* Heroes List */}
          {loading.active ? <Loading /> : <SectionContent />}
        </section>
      </div>
    </main>
  );
}

function SectionContent() {
  return <GetHeroesList />;
}
