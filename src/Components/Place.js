import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/edwin.jpg";

export default function Place({ place }) {
  const { name, images, Rate } = place;
  return (
    <article className="place">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single place" />
        <div className="price-top">
          <h6>{Rate}</h6>
          <p>Rate</p>
        </div>
        <Link to={`/places/${name}`} className="btn-primary place-link">
          Explore
        </Link>
      </div>
      <p className="place-info">{name}</p>
    </article>
  );
}
