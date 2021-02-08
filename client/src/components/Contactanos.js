import React from "react";

function Contactanos() {
  return (
    <>
      <div className="central">
        <div className="icon">
          <svg height="80" width="80">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="white"
              stroke-width="4"
              fill="none"
            ></circle>
          </svg>
          <a href="https://www.instagram.com/ibis_bar_beccar/?hl=en">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </div>
        <div className="icon">
          <svg height="80" width="80">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="white"
              stroke-width="4"
              fill="none"
            ></circle>
          </svg>
          <a href="https://www.facebook.com/pages/category/Bar/Ibis-Bar-343926049316687/">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
        </div>
        <div className="icon">
          <svg height="80" width="80">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="white"
              stroke-width="4"
              fill="none"
            ></circle>
          </svg>
          <a href="https://wa.me/5491134748996/?text=Quisiera%20consultar%20sobre%20los%20productos">
            <i class="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contactanos;
