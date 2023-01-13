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

const CardBestSellersCatagory = () => {
  const [showCatFood, setShowCatFood] = useState(true);
  const [showDogMed, setShowDogMed] = useState(false);
  const [showKibbles, setShowKibbles] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleShowCatFood = () => {
    showDogMed &&
      (setShowKibbles(false), setShowDogMed(false), setShowCatFood(true));

    showKibbles &&
      (setShowDogMed(false), setShowCatFood(true), setShowKibbles(false));
  };
  const handleShowDogMedicine = () => {
    showCatFood &&
      (setShowDogMed(true), setShowCatFood(false), setShowKibbles(false));

    showKibbles &&
      (setShowDogMed(true), setShowCatFood(false), setShowKibbles(false));
  };
  const handleShowDryKibbles = () => {
    showCatFood &&
      (setShowDogMed(false), setShowCatFood(false), setShowKibbles(true));

    showDogMed &&
      (setShowKibbles(true), setShowDogMed(false), setShowCatFood(false));
  };
  return (
    <div id="best-and-category">
      <div className="cards">
        <div className="head">
          <div className="text">BEST SELLERS</div>
        </div>
        <div className="best-and-category">
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
          <div id="category">
            <div className="head">
              <div className="text">CATEGORY</div>
              <div className="btns">
                <button
                  className={showCatFood ? "line" : null}
                  onClick={() => handleShowCatFood()}
                >
                  Cat Food
                </button>
                <button
                  className={showDogMed ? "line" : null}
                  onClick={() => handleShowDogMedicine()}
                >
                  Dog Medicine
                </button>
                <button
                  className={showKibbles ? "line" : null}
                  onClick={() => handleShowDryKibbles()}
                >
                  Dry Kibbles
                </button>
              </div>
            </div>
            <div className="category">
              {showCatFood && (
                <div className="cat-food">
                  <Swiper
                    modules={[Navigation, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    speed={500}
                    navigation
                  >
                    {products.data.category?.catFood.map((element) => {
                      return (
                        <SwiperSlide key={element.id}>
                          <div className="card-category">
                            <div className="img">
                              <img src={element.image} alt="" />
                            </div>
                            <div className="info">
                              <Link>{element.name}</Link>
                              <p className="price-product">
                                <span
                                  className={
                                    element.discountPrice
                                      ? "price"
                                      : "discountPrice"
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
              )}
              {showDogMed && (
                <div className="dog-medicine">
                  <Swiper
                    modules={[Navigation, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    speed={500}
                    navigation
                  >
                    {products.data.category?.dogMedicine.map((element) => {
                      return (
                        <SwiperSlide key={element.id}>
                          <div className="card-category">
                            <div className="img">
                              <img src={element.image} alt="" />
                            </div>
                            <div className="info">
                              <Link>{element.name}</Link>
                              <p className="price-product">
                                <span
                                  className={
                                    element.discountPrice
                                      ? "price"
                                      : "discountPrice"
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
              )}
              {showKibbles && (
                <div className="dry-kibbles">
                  <Swiper
                    modules={[Navigation, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    speed={500}
                    navigation
                  >
                    {products.data.category?.dryKibbles.map((element) => {
                      return (
                        <SwiperSlide key={element.id}>
                          <div className="card-category">
                            <div className="img">
                              <img src={element.image} alt="" />
                            </div>
                            <div className="info">
                              <Link>{element.name}</Link>
                              <p className="price-product">
                                <span
                                  className={
                                    element.discountPrice
                                      ? "price"
                                      : "discountPrice"
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBestSellersCatagory;
