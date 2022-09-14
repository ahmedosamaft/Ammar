import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarHalfAlt,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function Review() {
  return (
    <div>
      <div className="review-cont">
        <div className="heading-container" >
          <h5 className="wow zoomInDown">REVIEW</h5>
          <h2 className="wow zoomInDown">10,000+ Happy Customers</h2>
        </div>
        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="bug">(Bug Fixing)</p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className="text-cont">
                <p>
                  Ashamed no inhabit ferrars it ye besides resolve. Own judgment
                  directly few trifling. Elderly as pursuit at regular do
                  parlors. Rank what has into fond pursuit at regular.
                </p>
              </div>
              <div className="thumb-box">
                <div className="thumb">
                  <img
                    src="https://wordpressriverthemes.com/aveitelementor/wp-content/uploads/2022/03/2-1.jpg"
                    alt="thumb"
                  />
                </div>
              </div>
              <div className="thumb-text">
                <h5>Jonath Dark</h5>
                <span>Customer Service</span>
              </div>
            </div>
            <div className="carousel-item">
              <p className="bug">(Bug Fixing)</p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className="text-cont">
                <p>
                  Ashamed no inhabit ferrars it ye besides resolve. Own judgment
                  directly few trifling. Elderly as pursuit at regular do
                  parlors. Rank what has into fond pursuit at regular.
                </p>
              </div>
              <div className="thumb-box">
                <div className="thumb">
                  <img
                    src="https://wordpressriverthemes.com/aveitelementor/wp-content/uploads/2022/03/1-1.jpg"
                    alt="thumb"
                  />
                </div>
              </div>
              <div className="thumb-text">
                <h5>Jonath Dark</h5>
                <span>Customer Service</span>
              </div>
            </div>
            <div className="carousel-item">
              <p className="bug">(Bug Fixing)</p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className="text-cont">
                <p>
                  Ashamed no inhabit ferrars it ye besides resolve. Own judgment
                  directly few trifling. Elderly as pursuit at regular do
                  parlors. Rank what has into fond pursuit at regular.
                </p>
              </div>
              <div className="thumb-box">
                <div className="thumb">
                  <img
                    src="https://wordpressriverthemes.com/aveitelementor/wp-content/uploads/2022/03/3-1.jpg"
                    alt="thumb"
                  />
                </div>
              </div>
              <div className="thumb-text">
                <h5>Jonath Dark</h5>
                <span>Customer Service</span>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span className="" aria-hidden="true">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
