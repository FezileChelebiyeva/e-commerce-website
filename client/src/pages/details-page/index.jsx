import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { increment, incrementPrice } from "../../redux/slice/cardSlice";
import "./index.scss";
const DeatilsCard = () => {
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  let array;
  const getDataByName = async () => {
    const response = await axios.get(
      `http://localhost:8000/products/allproducts/${name}`
    );
    setProduct(await response.data);
  };

  useEffect(() => {
    getDataByName();
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
    <div id="details-page">
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <header>
        <div className="container">
          <span onClick={() => navigate("/")} className="home">
            Home
          </span>{" "}
          <span className="product-name">{">"} {product.name}</span>
        </div>
      </header>
      <div className="container">
        <div className="details">
          <div className="img">
            <img src={product.image} alt="" />
          </div>
          <div className="information">
            <div className="name">{product.name}</div>
            <p className="sku">SKU: {product.sku}</p>
            <p className="price-product">
              <span
                className={product.discountPrice ? "price" : "discountPrice"}
              >
                ${product.price}{" "}
              </span>
              <span className="discountPrice">
                {product.discountPrice ? "$" : null}
                {product.discountPrice}
              </span>
            </p>
            <div className="title">{product.title}</div>
            <div className="btn">
              <button
                onClick={() => {
                  handeAddCard(product);
                  dispatch(increment());
                  dispatch(incrementPrice(product.price));
                }}
              >
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeatilsCard;
