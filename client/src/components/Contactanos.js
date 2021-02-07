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
          <i class="fab fa-instagram fa-2x"></i>
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
          <i class="fab fa-facebook fa-2x"></i>
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
          <i class="fab fa-whatsapp fa-2x"></i>
        </div>
      </div>
    </>
  );
}

export default Contactanos;
