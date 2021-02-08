import React, { useEffect } from "react";
import { detailsProduct } from "../Redux/Products/Actions/productActions";
import cComponent from "./css/productComponent.module.css";
import { useSelector, useDispatch } from "react-redux";
var placeholder = "/imagenes/Placeholder.png";

function ProductComponent(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { productDet, loadingDet, errorDet } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.producto.match.params.id));
  }, [dispatch, props.producto.match.params.id]);

  return (
    <div className={`${cComponent.master}`} style={{ paddingTop: "125px" }}>
      <div className={cComponent.cards}>
        {loadingDet ? (
          <div className="alert alert-success">Cargando...</div>
        ) : errorDet ? (
          <div>{errorDet}</div>
        ) : (
          <div className={`${cComponent.carritoPage}`}>
            <div className={`${cComponent.cards}`}>
              <div className={cComponent.stcolumn}>
                {productDet.img ? (
                  <img
                    className={cComponent.cardImage}
                    src={productDet.img}
                    alt="productCompImage"
                    lazyload="true"
                  ></img>
                ) : (
                  <img
                    className={cComponent.cardImage}
                    src={`${placeholder}`}
                    alt="productCompImage"
                  ></img>
                )}
                <div className={`${cComponent.cardDet}`}>
                  {productDet.name}
                  <h4 className={cComponent.cardCat}>{productDet.category}</h4>
                  <div className={cComponent.cardDesc}>
                    <p>
                      <i className={cComponent.cardDesc}>
                        {productDet.description}
                      </i>
                    </p>
                  </div>
                </div>
              </div>
              <div className={cComponent.ndcolumn}>
                <div className={`${cComponent.cardPrice}`}>
                  <h5>Precio</h5>
                  <span>$ {productDet.price}</span>
                </div>
                <div className={cComponent.addcart}>
                  <a href="https://wa.me/5491134748996/?text=Quisiera%20consultar%20sobre%20los%20productos">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductComponent;
