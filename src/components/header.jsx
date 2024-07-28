import React from "react";

import logoDesk from "../assets/logo/Group@3x.png";
import logoMob from "../assets/logo/logoMobile.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-image">
        <img src={logoDesk} className="desktop" alt="Marvel Search Heroes" />
        <img src={logoMob} className="mobile" alt="Marvel Search Heroes" />
      </div>
      <div className="header-title">
        <h1>EXPLORE O UNIVERSO</h1>
        <h4>
          Mergulhe no dominio deslumbrante de todos os personagens cássicos que
          você ama - e aqueles que você descobrirá em breve!
        </h4>
      </div>
    </header>
  );
}
