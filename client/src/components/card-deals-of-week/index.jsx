import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/detDataSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const CardDealsOfWeek = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div id="deals-of-week-cards">
      <h1>DEALS OF THE WEEK</h1>
      <div className="cards">
        <Swiper
          modules={[Navigation, EffectFade]}
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          speed={500}
          navigation
        >
          {products.data.dealsOfWeek?.map((element) => {
            return (
              <SwiperSlide key={element.id}>
                <div className="card">
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
                    <p className="title">{element.title.substring(0, 94)}...</p>
                    <div className="date">
                      <div className="square">
                        <p>00</p>
                        <p>Days</p>
                      </div>
                      <div className="square">
                        <p>00</p>
                        <p>Hour</p>
                      </div>
                      <div className="square">
                        <p>00</p>
                        <p>Mint</p>
                      </div>
                      <div className="square">
                        <p>00</p>
                        <p>Sec</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CardDealsOfWeek;
