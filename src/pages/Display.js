import React, { Component } from "react";
import axios from "axios";
import image from "../images/night.jpg";

export default class extends Component {
  state = {
    temperature: "",
    description: "",
    time: "",
    location: "",
    image: ""
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    try {
      let client = {};

      let tokenPromise = axios.get("/id").then(response => {
        let key = response.data.key;

        client = key;
      });

      await tokenPromise;

      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${client}&query=Sheffield`
        )
        .then(res => {
          this.setState({
            temperature: res.data.current.temperature,
            time: res.data.current.observation_time,
            description: res.data.current.weather_descriptions,
            location: res.data.location.name,
            image: res.data.current.weather_icons
          });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="weather">
          <div className="weather-center">
            <article className="place">
              <div className="weather-container">
                <img src={image} alt="single place" />
                <div className="weather-top">
                  <div>Weather</div>
                  <div>{this.state.time}</div>
                  <div>temperature : {this.state.temperature}</div>
                  <div> Sky : {this.state.description}</div>
                </div>
              </div>
              <p className="weather-info">{this.state.location}</p>
            </article>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
