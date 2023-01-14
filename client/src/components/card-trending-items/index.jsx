import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import { fetchData } from "../../redux/slice/getDataSlice";
import { Link, useNavigate } from "react-router-dom";
import { addProduct, increment, incrementPrice } from "../../redux/slice/cardSlice";
const CardTrendingItems = () => {
  const [btnStatus, setBtnStatus] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const navigate = useNavigate();
  const handeAddCard = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div id="trending-items">
      <div className="trending-items">
        <h1>TRENDING ITEMS</h1>
        <div className="cards">
          <Swiper
            modules={[Navigation, EffectFade]}
            spaceBetween={50}
            slidesPerView={4}
            slidesPerGroup={4}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            speed={500}
            navigation
          >
            {products.data.trendingItems?.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div
                    onMouseEnter={() => setBtnStatus(false)}
                    onMouseLeave={() => setBtnStatus(true)}
                    className="card-trending"
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
                            navigate("/cards");
                            dispatch(increment());
                            dispatch(incrementPrice(element.price));
                          }}
                        >
                          Add to card
                        </button>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CardTrendingItems;
