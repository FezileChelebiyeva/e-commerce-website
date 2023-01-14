import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decremennt,
  decrementPrice,
  removeAllProduct,
  removeProduct,
} from "../../redux/slice/cardSlice";
import "./index.scss";
const CardsPage = () => {
  const product = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeProduct());
  }, []);

  const navigate = useNavigate();

  let quantity = 1;
  return (
    <div id="added-product">
      <div className="container">
        <div className="products">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {product.product.map((element) => {
                return (
                  <tr key={element.id}>
                    <td>
                      <img src={element.image} alt={element.name} />
                    </td>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td>{quantity}</td>
                    <td>{element.price}</td>
                    <td>
                      <div
                        onClick={() => {
                          dispatch(removeProduct(element.id));
                          dispatch(decremennt());
                          dispatch(decrementPrice(element.price));
                        }}
                        className="remove"
                      >
                        x
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="btns">
            <button onClick={() => navigate("/")}>CONTINUE SHOPPING</button>
            <button
              onClick={() => dispatch(removeAllProduct())}
              className="clear"
            >
              CLEAR CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
