import React, { Component } from "react";
import Title from "./Title";

export default class MidBanner extends Component {
  render() {
    return (
      <section className="services">
        <Title title="Explore" />
        <div className="services-center"></div>
      </section>
    );
  }
}
