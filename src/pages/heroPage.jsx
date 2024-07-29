import GetHeroData from "../components/API/getHero";
import logoMob from "../assets/logo/logoMobile.png";
import SearchSection from "../components/searchSection";
export default function HeroPage() {
  return (
    <section className="heroPage">
      <header className="header">
        <div className="content">
          <div className="logo">
            <a href="/" rel="noopener noreferrer">
              <img
                src={logoMob}
                className="mobile"
                alt="Marvel Search Heroes"
              />
            </a>
          </div>
          <SearchSection page={""} />
        </div>
      </header>
      <GetHeroData />
    </section>
  );
}
