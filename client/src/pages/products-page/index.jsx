import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { increment, incrementPrice } from "../../redux/slice/cardSlice";
import { fetchData } from "../../redux/slice/getDataSlice";
import "./index.scss";

const AllProducts = () => {
  const [btnStatus, setBtnStatus] = useState(true);
  const [bestSellers, setBestSellers] = useState(false);
  const [sort, setSort] = useState(false);
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
  const handleSortByAz = () => {
    dispatch(fetchData(1));
  };
  const handleSortByZa = () => {
    dispatch(fetchData(2));
  };
  const handleSortByPrice = () => {
    dispatch(fetchData(3));
  };
  const handleSortByPriceReverse = () => {
    dispatch(fetchData(4));
  };
  return (
    <div id="collection-all">
      <Helmet>
        <title>Products - Tammy demo</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <header>
        <div className="container">
          <span onClick={() => navigate("/")} className="home">
            Home
          </span>{" "}
          <span className="product">{">"} Products</span>
        </div>
      </header>
      <div className="container">
        <div className="sort">
          <div onClick={() => setSort(!sort)}>Sort by</div>
          {sort && (
            <div className="btn">
              <div>
                <button onClick={() => setBestSellers(false)}>
                  All Product
                </button>
                <button onClick={() => handleSortByAz()}>
                  Alphabetically, A-Z
                </button>
                <button onClick={() => handleSortByZa()}>
                  Alphabetically, Z-A
                </button>
                <button onClick={() => handleSortByPrice()}>
                  Price min-max
                </button>
                <button onClick={() => handleSortByPriceReverse()}>
                  Price max-min
                </button>
                <button onClick={() => setBestSellers(true)}>
                  Best Sellers
                </button>
              </div>
            </div>
          )}
        </div>
        {bestSellers ? (
          <div className="products">
            {products.data.bestSellers?.map((element) => {
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
        ) : (
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
                    <Link to={`/collection-all/${element.name}`}>
                      <img src={element.image} alt="" />
                    </Link>
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
        )}
      </div>
    </div>
  );
};

export default AllProducts;
