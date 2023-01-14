import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, EffectFade } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/detDataSlice";
import { Link } from "react-router-dom";
const CardUsersInterested = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div id="users-interested">
      <div className="users-interested">
        <div className="best-sellers">
          <div className="head">
            <div className="text">YOU MAY BE INTERESTED IN</div>
          </div>
          <div className="cards">
            <Swiper
              modules={[Navigation, EffectFade]}
              spaceBetween={50}
              slidesPerView={3}
              slidesPerColumn={1}
              slidesPerGroup={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              speed={500}
              navigation
            >
              {products.data.usersInterested?.map((element) => {
                return (
                  <SwiperSlide key={element.id}>
                    <div className="card-users-interested">
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
                        <div className="icons">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="btn">
                            <button>Add to card</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUsersInterested;
