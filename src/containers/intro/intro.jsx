import React, { useEffect } from "react";
import { logo } from "../../assets/images/images";
import { IntroStyle } from "./intro-style";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { useState } from "react";
import sillanegra from "../../assets/images/sillanegra.png";
import mesanegra from "../../assets/images/mesanegra.png";
import Sofablanco from "../../assets/images/Sofablanco.png";

const Intro = () => {
  let mySwiper = null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    mySwiper = new Swiper(".swiper-container", {
      speed: 1000,
      direction: "vertical",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      scrollbar: {
        container: ".swiper-scrollbar",
        hide: true,
        draggable: true,
        snapOnRelease: true,
      },
    });
  }, []);

  return (
    <IntroStyle>
      <div className={`header ${active ? "active" : ""}`}>
        <div className="menu-container">
          {active ? (
            <div className="menu">
              <div className="menu-item">
                <div className="left-menu">
                  <button className="menu-button">Collection</button>
                  <div className="dropdown-menu">
                    <div class="ele">
                      <ul>
                        <li>
                          <div class="outer">
                            <div class="inner">
                              <a href="#">Furniture</a>
                              <div className="swiper-slide-active">
                                <div className="ele">
                                  <img
                                    src={Sofablanco}
                                    alt=""
                                    className="imagen"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <a href="#">Ligthin</a>
                        <a href="#">Accesories</a>
                      </ul>
                    </div>
                  </div>
                  <h1 className="text-1">Design</h1>
                  <h1 className="text-1">Craftmanship</h1>
                  <h1 className="text-1">Ethics</h1>
                </div>
              </div>
              <div>
                <h1 className="text-2">Collection</h1>
                <h1 className="text-2">Collection</h1>
                <h1 className="text-2">Collection</h1>
                <h1 className="text-2">Collection</h1>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <h1 className="mater">mater</h1>

        <button className="header-menu" onClick={() => setActive(!active)}>
          menu
        </button>
      </div>

      <div className="App">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="title"></div>
        <div className="container-buttons">
          <p></p>
        </div>

        <div className="slider-container">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              {/* <!-- Additional required wrapper --> */}

              <div className="swiper-slide">
                <div className="title">
                  <p className="title4">Michael W.Dreeben</p>
                  <br></br>
                  <h1 className="title2">Shell Dining Chair </h1>
                  <br></br>
                  <p className="title3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Debitis laudantium ipsum omnis fugit molestiae dignissimos,
                    a aspernatur laborum modi iure quidem et voluptate odio
                    accusantium at similique nostrum nihil delectus.
                  </p>

                  <button className="container-buttons">
                    <p>Product Details</p>
                  </button>
                </div>
                <div className="silla">
                  <img src={sillanegra} alt="not found" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="title">
                  <p className="title6">Jeaper K.Thomas</p>
                  <br></br>
                  <h1 className="title5">Dunes Anthtrazite Black </h1>
                  <br></br>
                  <p className="title3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Debitis laudantium ipsum omnis fugit molestiae dignissimos,
                    a aspernatur laborum modi iure quidem et voluptate odio
                    accusantium at similique nostrum nihil delectus.
                  </p>

                  <button className="container-buttons">
                    <p>Product Details</p>
                  </button>
                </div>
                <div className="silla">
                  <img src={mesanegra} alt="not found" />
                </div>
              </div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination"></div>

            <div className="swiper-scrollbar">
              {/* <!-- If we need scrollbar --> */}
            </div>
          </div>
        </div>
        <div className="swiper-button-container">
          <div className="swiper-button-prev">
            01
            <br></br>
            shell dining chair
            <br></br>
          </div>

          <div className="swiper-button-next">
            02
            <br></br>
            dunes anthtrazite black
          </div>
        </div>
      </div>
      {/* <!-- If we need navigation buttons --> */}
    </IntroStyle>
  );
};

export default Intro;
