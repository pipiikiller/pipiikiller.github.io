import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgone from "../../assets/images/delicious_menus/Delicious_32p49x36p55.png";
import Bgtwo from "../../assets/images/delicious_menus/Delicious_32p49x36p55_2.png";
import five from "../../assets/images/menus/La_Phet_Toke.png";
import six from "../../assets/images/menus/Kout_Nyin_Paung.png";
import seven from "../../assets/images/resource/menu-image-7.png";
import eight from "../../assets/images/resource/menu-image-8.png";
import nine from "../../assets/images/resource/menu-image-9.png";
import ten from "../../assets/images/resource/menu-image-10.png";

function Menusection() {
  const [tabMenu, tabActive] = useState({ a: true });

  return (
    <>
      <section className="menu-section">
        <div className="left-bg">
          {/* <img src={bgone} alt="" title="" /> */}
        </div>

        <div className="right-bg">
          {/* <img src={Bgtwo} alt="" title="" /> */}
        </div>

        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>Special selection</span>
            </div>

            <div className="pattern-image">
              <img
                src={require("../../assets/images/icons/separator.svg").default}
                alt="mySvgImage"
              />
            </div>

            <h2>Delicious Menu</h2>
          </div>

          <div className="tabs-box menu-tabs">
            <div className="buttons">
              <ul className="tab-buttons clearfix">
                <li
                  className={`tab-btn ${tabMenu.a && "active-btn"}`}
                  onClick={() => tabActive({ a: true })}
                  data-tab="#tab-1"
                >
                  <span>Burmese Street Food</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.b && "active-btn"}`}
                  onClick={() => tabActive({ b: true })}
                  data-tab="#tab-2"
                >
                  <span>Salads</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.c && "active-btn"}`}
                  onClick={() => tabActive({ c: true })}
                  data-tab="#tab-3"
                >
                  <span>Classics</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.d && "active-btn"}`}
                  onClick={() => tabActive({ d: true })}
                  data-tab="#tab-4"
                >
                  <span>Heritage Sets</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.e && "active-btn"}`}
                  onClick={() => tabActive({ e: true })}
                  data-tab="#tab-5"
                >
                  <span>Wok Kissed Greens</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.f && "active-btn"}`}
                  onClick={() => tabActive({ f: true })}
                  data-tab="#tab-6"
                >
                  <span>Drinks</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.g && "active-btn"}`}
                  onClick={() => tabActive({ g: true })}
                  data-tab="#tab-7"
                >
                  <span>Desserts</span>
                </li>
              </ul>
            </div>
            <div className="tabs-content">
              <div className={`tab ${tabMenu.a && "active-tab"}`} id="tab-1">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Mingalar Zay Stuffed Fishcake
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Zesty vegetables sandwiched in springy fried
                              featherback fishcake
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Signature Shan Fried Tofu{" "}
                                  <span className="s-info">
                                    Shan-Toh-Huu-Kyaw
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Chickpea fritters with a golden crisp on the
                              exterior and a tender tofu-like interior
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Spring Roll</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Classic snack we all know and love
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Slow-braised Pork Trotter Soup{" "}
                                  <span className="s-info">
                                    Wat-Cha-Douk-Soup-Pyote
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Melt-in-your-mouth tender pork trotters in a rich
                              savoury broth
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Fritter Platter{" "}
                                  {/* <span className="s-info">NEW</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Assortment of traditional Burmese fritters, a
                              perfect choice for sampling
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Golden Sticky Rice{" "}
                                  <span className="s-info">Si-Hta-Min</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              A match made in heaven with tender yellow peas and
                              sautéed onion garnish
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Pel Paratha{" "}
                                  <span className="s-info">
                                    Mashed Peas/Plain
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Experience Paratha like locals, with seasoned
                              mashed yellow peas or enjoy it plain with a side
                              of sugar
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Scott Market Wat-Thar-Dote-Htoe{" "}
                                  {/* <span className="s-info">Mashed Peas/Plain</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Tender braised pork offal skewers served in a
                              luxurious steel broth pot with a flame,
                              accompanied by a chili and garlic dip for an
                              indulgent experience
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab ${tabMenu.b && "active-tab"}`} id="tab-2">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">La-Phet Thoke</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Earthy pickled tea leaves mixed with dried prawns
                              and double-fried legumes for a lively contrast of
                              textures and flavours
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Ginn Thoke{" "}
                                  {/* <span className="s-info">SEASONAL</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Finely sliced, tender young ginger salad offering
                              a flavourful bite that also eases indigestion and
                              inflammation
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Pone-Yay-Gyi Thoke</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Rich, umami depth of the fermented horse gram
                              beans combined with freshly chopped onion and
                              spices
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Nga-Pi-Yay-Toh-Sa-Yar</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Features crisp crudités, including seasonal
                              vegetables, accompanied by a pungent, flavourful
                              fermented fish dip. This combination pairs
                              wonderfully with rice, Traditonal House Dishes and
                              our Heritage Sets, adding a bold, savoury touch to
                              your meal
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Say-Bel-Ou Thoke{" "}
                                  {/* <span className="s-info">NEW</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Unique, creamy texture of century eggs perfectly
                              balanced by the freshness of the tangy salad
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Pazun-Chin Thoke</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Homemade delicate rice cakes with a subtle tang,
                              made from fresh rice and whole shrimps fermented
                              together, served with a burst of vibrant herbs
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Nga-Phel-Chin Thoke</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Homemade rice cakes with a firm texture and
                              tangy-sweet flavor, made from fresh rice and
                              scraped featherback fish fermented together,
                              served with a burst of vibrant herbs
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Myinn-Khwar-Ywat Thoke</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Boasts the greenest on the menu, featuring
                              pennywort leaves complemented by the nutty, earthy
                              balance of pounded peanuts
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab ${tabMenu.c && "active-tab"}`} id="tab-3">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Mont-Hinn-Ngar</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              A traditional Burmese rice-noodle soup with a
                              savoury, aromatic fish-based broth, featuring a
                              variety of garnishes
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Ohn-No-Khauk-Swel{" "}
                                  {/* <span className="s-info">SEASONAL</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              A Burmese style egg-noodle soup known for its
                              rich, creamy coconut broth with succulent bites of
                              chicken
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Nan-Gyi-Thoke</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Thick noodles tossed with chickpea powder and
                              shredded sautéed chicken, topped with fresh herbs
                              and boiled egg
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Nan-Pyar-Thoke{" "}
                                  {/* <span className="s-info">NEW</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Akin to Nan-Gyi-Thoke, this dish features thick
                              flat noodles tossed in chickpea powder and
                              shredded sautéed chicken, topped with fresh herbs,
                              and boiled egg, with the flat noodles adding a
                              unique twist
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Shan-Khauk-Swel</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Essence of Shan cuisine (Northeastern Burma),
                              featuring rice noodles served in a savoury sauce
                              of soybeans and spices, combined with diced
                              sautéed chicken and pickled vegetables
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Kyay-Oh{" "}
                                  <span className="s-info">
                                    (Dry/Soup) (Pork/Chicken)
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              A versatile vermicelli bowl served as either a
                              soup, or dry with the cloudy broth served
                              separately. Enriched with chicken or pork
                              meatballs, it’s ideal for those preferring gentle
                              flavours over spicy or bold tastes. **If you
                              prefer not to have offal, please kindly request
                              its exclusion when ordering**
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab ${tabMenu.d && "active-tab"}`} id="tab-4">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Rangoon Set</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Savour the heritage flavours of Rangoon with
                              Pa-Zun-Chin Thoke, your choice of house curry,
                              soup, rice, and today’s selection of fritters
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Mandalay Set</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Savour the heritage flavours of Mandalay with
                              Pone-Yay-Gyi Thoke, your choice of house curry,
                              soup, rice and Mandalay pea fritters
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Royal Daung-Lan Set{" "}
                                  <span className="s-info">Ideal for four</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Experience a regal Burmese lacquerware feast with
                              our Royal Daung-lan Set. Comes with a starter and
                              three house curries of your choice, today’s
                              special soup, choice of stir-fried vegetables, an
                              assortment of fritters, a traditional lacquerware
                              tea leaf salad box, fermented fish dip with fresh
                              crudités (nga-pi-yay toh-sa-yar), dessert of the
                              day, and unlimited rice
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab ${tabMenu.e && "active-tab"}`} id="tab-5">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Morning Glory</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Kai Lan{" "}
                                  {/* <span className="s-info">Kai Lan</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Cabbage</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Typesetting industry lorem Lorem Ipsum is simply
                              dummy text of the priand.
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Cauliflower{" "}
                                  {/* <span className="s-info">NEW</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices.
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Beansprouts</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Avocados with crab meat, red onion, crab salad
                              stuffed red bell pepper and green bell pepper.
                              Cucumber
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab ${tabMenu.f && "active-tab"}`} id="tab-6">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Tamarind and Grass Jelly Juice{" "}
                                  <span className="s-info">(Cold Drinks)</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Roselle Buds Juice{" "}
                                  <span className="s-info">
                                    Chin-Paung Phoo (Cold Drinks)
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Butterfly Pea Tea{" "}
                                  <span className="s-info">
                                    Aung-Mel-Nyo (Cold Drinks)
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Typesetting industry lorem Lorem Ipsum is simply
                              dummy text of the priand.
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Fresh Lime Juice{" "}
                                  <span className="s-info">Cold Drinks</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Typesetting industry lorem Lorem Ipsum is simply
                              dummy text of the priand.
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Black Coffee{" "}
                                  <span className="s-info">Hot Drinks</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices.
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  White Coffee{" "}
                                  <span className="s-info">Hot Drinks</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Avocados with crab meat, red onion, crab salad
                              stuffed red bell pepper and green bell pepper.
                              Cucumber
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Green Tea{" "}
                                  <span className="s-info">Hot Drinks</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div> */}
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Burmese Hot Tea{" "}
                                  <span className="s-info">
                                    Yay-Nway-Kyan (Hot Drinks)
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div> */}
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Burmese Milk Tea{" "}
                                  <span className="s-info">
                                    La-Phet-Yay (Hot Drinks)
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab ${tabMenu.g && "active-tab"}`} id="tab-7">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Egg Pudding</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Coconut-milk Sago Pudding{" "}
                                  <span className="s-info">
                                    Ohn-Noh-Thar-Ku-Pyin
                                  </span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Colourful Shaved Ice
                                  <span className="s-info">Yay-Khel-Thoke</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Typesetting industry lorem Lorem Ipsum is simply
                              dummy text of the priand.
                            </Link>
                          </div> */}
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Durian Malai
                                  {/* <span className="s-info">Yay-Khel-Thoke</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              An exclusive, luxurious treat featuring the rich,
                              aromatic, cream-infused durian, delivering an
                              indulgent and exotic dessert experience
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Cassava Semolina Cake{" "}
                                  {/* <span className="s-info">NEW</span> */}
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices.
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Banana Semolina Cake </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Avocados with crab meat, red onion, crab salad
                              stuffed red bell pepper and green bell pepper.
                              Cucumber
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Coconut-milk Jelly</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          {/* <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="open-timing">
            <div className="hours">
              Daily from <span className="theme_color">12:00 pm</span> to{" "}
              <span className="theme_color">10:00 pm</span>
            </div>
            <div className="link-box">
              <Link to="#" className="theme-btn btn-style-two clearfix">
                <span className="btn-wrap">
                  <span className="text-one">view all menu</span>
                  <span className="text-two">view all menu</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menusection;
