import React from "react";
import "./LastNews.css";
import WOW from "wowjs";
import { useEffect } from "react";

export default function LastNews() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className="teams">
      <div className="container">
        <div className="heading-container">
          <h5 className="wow zoomInDown">LATEST NEWS</h5>
          <h2 className="wow zoomInDown">Most Popular Breaking News & Top Stories</h2>
        </div>
        <div className="news">
          <div className="new withimg wow bounceInDown">
            <div className="overlay"></div>
            <h4>The for fully had she there leave merit enjoy forth.</h4>
            <div className="by">
              <img
                src="https://wordpressriverthemes.com/aveitelementor/wp-content/uploads/2022/03/3-1.jpg"
                alt="img"
              />
              <p>
                by <span>Ahmed Osama</span>
                <span className="bar"></span> in DEV
              </p>
            </div>
          </div>
          <div className="new wow bounceInDown">
            <h4>The for fully had she there leave merit enjoy forth.</h4>
            <p>
              Coming merits and was talent enough far. Sir joy northward
              sportsmen education. Discovery incommode earnestly no he commanded
              if. Put still any about manor. Estimable me disposing of be
              moonlight cordially curiosity.{" "}
            </p>
            <div className="by">
              <img
                src="https://wordpressriverthemes.com/aveitelementor/wp-content/uploads/2022/03/2-1.jpg"
                alt="img"
              />
              <p>
                by <span>Jonnsa harvid</span>
                <span className="bar"></span> in DEV
              </p>
            </div>
          </div>
          <div
            className="new withimg wow bounceInDown"
            style={{
              backgroundImage: `url(https://wordpressriverthemes.com/aveitelementor/wp-content/uploads/2022/03/v4-1.jpg)`,
            }}
          >
            <div className="overlay"></div>
            <h4>The for fully had she there leave merit enjoy forth.</h4>
            <div className="by">
              <img
                src="https://wordpressriverthemes.com/aveitelementor/wp-content/uploads/2022/03/3-1.jpg"
                alt="img"
              />
              <p>
                by <span>Ahmed Osama</span>
                <span className="bar"></span> in DEV
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
