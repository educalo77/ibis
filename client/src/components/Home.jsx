import React from "react";
import CatalogComponent from "../container/catalogComponent";
import Carousel from "../container/Carousel";
import home from "./css/home.module.css";
import FaqComponent from "../container/FaqComponent";
import Contactanos from "../components/Contactanos";

function Home() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div className={home.container}>
      <div className={home.carousel}>
        <section id="carousel">
          <Carousel />
        </section>
      </div>
      <div>
        <section id="catalog">
          <div className="separador"></div>
          <CatalogComponent />
        </section>
        <section id="faq">
          <FaqComponent />
        </section>
        <section id="contactanos">
          <Contactanos />
        </section>
      </div>
    </div>
  );
}

export default Home;
