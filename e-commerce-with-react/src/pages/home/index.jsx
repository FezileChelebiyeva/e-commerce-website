import React, { useState } from "react";
import logo from "../../assets/images/shopname.png";
import logo1 from "../../assets/images/oceandor.webp";
import logo2 from "../../assets/images/retroge.webp";
import logo3 from "../../assets/images/photograph.png";
import logo4 from "../../assets/images/designers.webp";
import { Carousel } from "antd";
import "./index.scss";
import { Helmet } from "react-helmet";
import CardDealsOfWeek from "../../components/card-deals-of-week";

const HomePage = () => {
  const [image, setImage] = useState(true);

  const handeImageCat = () => {
    setImage(true);
  };
  const handeImageDog = () => {
    setImage(false);
  };

  return (
    <div id="home-page">
      <Helmet>
        <title>Tammy demo</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="container">
        <div className="home">
          <div className="slider">
            <Carousel autoplay autoplaySpeed="200">
              <div
                className={`"dog-image" ${image ? "dog-image" : "cat-image"}`}
              >
                <div className="head">
                  {image ? (
                    <h1>
                      NOT JUST <br /> YOUR AVERAGE <br /> PET BOWL
                    </h1>
                  ) : (
                    <h1>
                      CAT BOWLS & <br /> CAT FOUNTAINS <br />
                      <p>Shop Online For Cat feeding and & Watering Supplies</p>
                    </h1>
                  )}

                  <button>SHOP NOW</button>
                </div>
                <div className="btn-slider">
                  <button
                    className={image ? "active" : null}
                    onClick={() => handeImageCat()}
                  ></button>{" "}
                  <button
                    className={image ? null : "active"}
                    onClick={() => handeImageDog()}
                  ></button>
                </div>
              </div>
              <div
                className={`"cat-image" ${image ? "cat-image" : "dog-image"}`}
              >
                <div className="head">
                  {image ? (
                    <h1>
                      NOT JUST <br /> YOUR AVERAGE <br /> PET BOWL
                    </h1>
                  ) : (
                    <h1>
                      CAT BOWLS & <br /> CAT FOUNTAINS <br />
                      <p>Shop Online For Cat feeding and & Watering Supplies</p>
                    </h1>
                  )}

                  <button>SHOP NOW</button>
                </div>
                <div className="btn-slider">
                  <button
                    className={image ? "active" : null}
                    onClick={() => handeImageCat()}
                  ></button>{" "}
                  <button
                    className={image ? null : "active"}
                    onClick={() => handeImageDog()}
                  ></button>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="images">
            <div className="image1">
              <div className="img"></div>
            </div>
            <div className="image2">
              <div className="img"></div>
            </div>
            <div className="image3">
              <div className="img"></div>
            </div>
          </div>

          <CardDealsOfWeek />

          <div className="images-middle">
            <div className="image1">
              <div className="img"></div>
            </div>

            <div className="image2-middle">
              <div className="img1">
                <div className="img"></div>
              </div>
              <div className="img2">
                <div className="img"></div>
              </div>
            </div>

            <div className="image3">
              <div className="img"></div>
            </div>
          </div>
          <div className="logos">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="logo">
              <img src={logo1} alt="" />
            </div>
            <div className="logo">
              <img src={logo2} alt="" />
            </div>
            <div className="logo">
              <img src={logo3} alt="" />
            </div>
            <div className="logo">
              <img src={logo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
