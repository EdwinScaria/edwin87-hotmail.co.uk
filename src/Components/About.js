import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/edwin.jpg";
import PropTypes from "prop-types";

export default function About({ place }) {
  const { name, slug, images, Rate } = place;
  return (
    <article className="place">
      <div class="img-container">
        <img src={images[0] || defaultImg} alt="single place" />
        <div className="price-top">
          <h6>{Rate}</h6>
          <p>Rate</p>
        </div>
        <Link to={`/places/${slug}`} className="btn-primary place-link">
          About
        </Link>
      </div>
      <p className="place-info">{name}</p>
    </article>
  );
}
