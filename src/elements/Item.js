import React from "react";
import propTypes from "prop-types";

export default function Item(props) {
  return (
    <div className="col-md-6 col-lg-4 mb-5 card" key={props.key}>
      <div
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#portfolioModal6"
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={props.data.imgSrc} alt="..." />
        <h2 className="text-center lead mt-3">{props.data.title}</h2>
        {props.data.imgAlt}
      </div>
    </div>
  );
}

Item.propTypes = {
  delayInMS: propTypes.number,
  data: propTypes.object,
};
