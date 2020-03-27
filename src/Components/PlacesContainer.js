import React, { Component } from "react";
import { PlaceContext } from "../context";
import Loading from "./Loading";
import Place from "./Place";

export default class PlacesContainer extends Component {
  static contextType = PlaceContext;
  render() {
    let { loading, selected: places } = this.context;
    places = places.map(place => {
      return <Place key={place.id} place={place}></Place>;
    });
    return (
      <section className="featured-rooms">
        <div className="featured-rooms-center">
          {loading ? <Loading></Loading> : places}
        </div>
      </section>
    );
  }
}
