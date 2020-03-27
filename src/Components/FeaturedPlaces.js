import React, { Component } from "react";
import { PlaceContext } from "../context";
import Loading from "./Loading";
import Place from "./Place";
import Title from "./Title";

export default class FeaturedPlaces extends Component {
  static contextType = PlaceContext;
  render() {
    let { loading, featuredPlaces: places } = this.context;
    places = places.map(place => {
      return <Place key={place.id} place={place}></Place>;
    });
    return (
      <section className="featured-rooms">
        <h1 className="featured">
          <Title title="Top Attractions" />
        </h1>
        <div className="featured-rooms-center">
          {loading ? <Loading></Loading> : places}
        </div>
      </section>
    );
  }
}
