import React from "react";
import { Link } from "react-router-dom";
import badge1 from "../../assets/images/tell_stories/Tells A Story_6p95x6p84.png";
import img1 from "../../assets/images/tell_stories/Tells A Story_20p_11.png";

function Story() {
  return (
    <>
      <section className="story-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="text-col col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="title-box centered">
                  <div className="subtitle">
                    <span> Our story </span>
                  </div>
                  {/* <div className="pattern-image">
                    <img
                      src={
                        require("../../assets/images/icons/separator.svg")
                          .default
                      }
                      alt="mySvgImage"
                    />
                  </div> */}
                  <h2>Authentic Burmese Heritage</h2>
                  <div className="text">
                    A taste of Burmese heritage—authentic, fresh, high-quality and crafted to please every palate! Arponnar brings authentic, flavourful dishes from Burma to London—where heritage meets deliciousness! Burmese flavour is closer than you think! Just 1 minute stroll from Willesden Green Station, explore Arponnar's vibrant dishes – perfect for first timers and food lovers!
                  </div>
                </div>
                <div className="booking-info">
                  <div className="bk-title">Book Through Call</div>
                  <div className="bk-no">
                    <Link to="tel:+447576607122">+44 7576 607122</Link>
                  </div>
                </div>
                <div className="news-link" style={{ marginTop: '30px', textAlign: 'center' }}>
                  <a
                    href="https://www.broadsheet.com/london/articles/arponnar-brings-homestyle-burmese-cooking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn btn-style-one clearfix"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Read More About Us on the News</span>
                      <span className="text-two">Read More About Us on the News</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="image-col col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="round-stamp">
                  {/* <img src={badge1} alt="" /> */}
                </div>
                <div className="images parallax-scene-1">
                  <div className="image" data-depth="0.15">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Story;
