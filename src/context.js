import React, { Component } from "react";
import axios from "axios";
const contentful = require("contentful");

const PlaceContext = React.createContext();
export default class PlaceProvider extends Component {
  state = {
    places: [],
    sortedPlaces: [],
    featuredPlaces: [],
    selected: [],
    loading: true
  };

  getData = async () => {
    try {
      let client = {};

      let tokenPromise = axios.get("/id").then(response => {
        let space = response.data.space;
        let accessToken = response.data.accessToken;

        client = contentful.createClient({
          space: space,
          accessToken: accessToken
        });
      });

      await tokenPromise;

      let response = await client.getEntries({
        content_type: "travel"
      });
      let places = this.formatData(response.items);
      let featuredPlaces = places.filter(place => place.featured === true);
      let selected = places.filter(place => place.selected === true);

      this.setState({
        places,
        featuredPlaces,
        sortedPlaces: places,
        selected,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(images => images.fields.file.url);

      let place = { ...item.fields, images, id };
      return place;
    });
    return tempItems;
  }
  getPlace = name => {
    let tempPlaces = [...this.state.places];
    const place = tempPlaces.find(place => place.name === name);
    return place;
  };

  render() {
    return (
      <PlaceContext.Provider
        value={{
          ...this.state,
          getPlace: this.getPlace
        }}
      >
        {this.props.children}
      </PlaceContext.Provider>
    );
  }
}

const PlaceConsumer = PlaceContext.Consumer;
export { PlaceProvider, PlaceConsumer, PlaceContext };
