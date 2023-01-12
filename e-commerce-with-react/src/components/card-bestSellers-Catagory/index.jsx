import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, EffectFade } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/detDataSlice";
import { Link } from "react-router-dom";

const CardBestSellersCatagory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div id="best-and-catagory">
      <div className="cards">
        <div className="head">
          <div className="text">BEST SELLERS</div>
        </div>
        <div className="best-sellers">
          <Swiper
            modules={[Navigation, EffectFade]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            speed={500}
            navigation
          >
            {products.data.bestSellers?.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div className="card-bestSellers">
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

export default CardBestSellersCatagory;
