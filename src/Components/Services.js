import React, { Component } from "react";
import Title from "./Title";
import { FaComments, FaMapMarkerAlt, FaCloud } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaComments />,
        title: "Ask For Advice",
        info: "Talk to us about locations and where you want to visit!"
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Maps",
        info: "Check you locations on the map"
      },
      {
        icon: <FaCloud />,
        title: "Weather",
        info: "Check the weather before making your visit"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
