import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import { fetchData } from "../../redux/slice/detDataSlice";
import { Link } from "react-router-dom";
const CardTrendingItems = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div id="trending-items">
        <div className="trending-items">
        <h1>TRENDING ITEMS</h1>
        <div className="cards">
            <Swiper
              modules={[Navigation, EffectFade]}
              spaceBetween={50}
              slidesPerView={4}
              slidesPerColumn={4}
              slidesPerGroup={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              speed={500}
              navigation
            >
              {products.data.trendingItems?.map((element) => {
                return (
                  <SwiperSlide key={element.id}>
                    <div className="card-trending">
                      <div className="img">
                        <img src={element.image} alt="" />
                      </div>
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
