import React from "react";
import AddProduct from "./adminAddProduct.jsx";
import AddCategory from "./adminAddCategory.jsx";
import aPanel from "./css/adminPanel.module.css";

class AdminPanel extends React.Component {
  render() {
    return (
      <div className={`${aPanel.centrar}`}>
        <div className={aPanel.container}>
          <AddCategory />
          <AddProduct />
        </div>
      </div>
    );
  }
}

export default AdminPanel;
