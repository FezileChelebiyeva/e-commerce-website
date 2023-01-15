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
              {JSON.parse(localStorage.getItem("Products"))?.map((element) => {
                return (
                  <tr key={element.id}>
                    <td>
                      <img src={element.image} alt={element.name} />
                    </td>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td>{element.quantity}</td>
                    <td>{element.total}</td>
                    <td>
                      <div
                        onClick={() => {
                          let array = JSON.parse(
                            localStorage.getItem("Products")
                          )?.filter((elem) => elem.id !== element.id);
                          localStorage.setItem(
                            "Products",
                            JSON.stringify(array)
                          );
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
              onClick={() => dispatch(removeAllProduct("Products"))}
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
