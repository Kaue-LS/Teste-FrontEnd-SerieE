import React from "react";

import logo1 from "../assets/logo/Group.png";
export default function Header() {
  return (
    <header>
      <div>
        <img src={logo1} alt="Marvel Search Heroes" />
      </div>
      <div>
        <h1>EXPLORE O UNIVERSO</h1>
        <p>
          Mergulhe no dominio deslumbrante de todos os personagens cássicos que
          você ama - e aqueles que você descobrirá em breve!
        </p>
      </div>
    </header>
  );
}
