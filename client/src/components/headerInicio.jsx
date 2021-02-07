import React from "react";
import hInicio from "./css/headerInicio.module.css";
import SearchBarComponent from "../container/searchBarComponent.jsx";
import SideBar from "../container/sideBarComponent.jsx";


function HeaderInicio() {
  const openMenu = () => {

    if (document.querySelector(".sidebar").classList.contains('open')) {
          document.querySelector(".sidebar").classList.remove("open");
    } else {
      document.querySelector(".sidebar").classList.add("open");
      
    }

  };


  return (
    <div>
      <div className={hInicio.header}>
        <div className={hInicio.marca}>
        <button className={hInicio.brandButton} onClick={openMenu}>
          &#9776;
        </button>
        </div>
          <div className={hInicio.brand}>
          <a href="/">IBIS</a>
        </div>
        <div className={hInicio.searchbar}>
          <SearchBarComponent />
        </div>
      </div>
      <aside style={{ zIndex: 1 }} className="sidebar">
        <SideBar />
      </aside>
    </div>
  );
}

export default HeaderInicio;
