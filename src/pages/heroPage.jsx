import GetHeroData from "../components/API/getHero";
import logoMob from "../assets/logo/logoMobile.png";
import SearchSection from "../components/searchSection";
export default function HeroPage() {
  return (
    <section className="heroPage">
      <header className="header">
        <div className="content">
          <div className="logo">
            <img src={logoMob} className="mobile" alt="Marvel Search Heroes" />
          </div>
          <SearchSection page={""} />
        </div>
      </header>
      <GetHeroData />
    </section>
  );
}
