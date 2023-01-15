import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { increment, incrementPrice } from "../../redux/slice/cardSlice";
import { fetchData } from "../../redux/slice/getDataSlice";
import "./index.scss";

const AllProducts = () => {
  const [btnStatus, setBtnStatus] = useState(true);
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let array;
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const handeAddCard = (product) => {
    array = JSON.parse(localStorage.getItem("Products")) || [];
    if (array.find((elem) => elem.id == product.id)) {
      let obj = array.find((elem) => elem.id == product.id);
      obj.quantity = obj.quantity + 1;
      obj.total = +obj.total + +product.price;
    } else {
      array.push(product);
    }
    localStorage.setItem("Products", JSON.stringify(array));
  };
  return (
    <div id="collection-all">
      <header>
        <div className="container">
          <span onClick={() => navigate("/")} className="home">
            Home
          </span>{" "}
          <span className="product">{">"} Products</span>
        </div>
      </header>
      <div className="container">
        <div className="products">
          {products.data.allProducts?.map((element) => {
            return (
              <div
                key={element.id}
                onMouseEnter={() => setBtnStatus(false)}
                onMouseLeave={() => setBtnStatus(true)}
                className="card-product"
              >
                <div className="img">
                  <img src={element.image} alt="" />
                </div>
                {btnStatus ? (
                  <div className="info">
                    <Link>{element.name}</Link>
                    <p className="price-product">
                      <span
                        className={
                          element.discountPrice ? "price" : "discountPrice"
                        }
                      >
                        ${element.price}{" "}
                      </span>
                      <span className="discountPrice">
                        {element.discountPrice ? "$" : null}
                        {element.discountPrice}
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="btn">
                    <button
                      onClick={() => {
                        handeAddCard(element);
                        dispatch(increment());
                        dispatch(incrementPrice(element.price));
                      }}
                    >
                      Add to card
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
