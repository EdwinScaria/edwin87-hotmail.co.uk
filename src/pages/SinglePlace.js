import React, { Component } from "react";
import MainBackground from "../Components/MainBackground";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import defaultImg from "../images/edwin.jpg";
import { PlaceContext } from "../context";
import StyledMain from "../Components/StyledMain";

export default class SinglePlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.slug,
      defaultImg
    };
  }
  static contextType = PlaceContext;
  render() {
    const { getPlace } = this.context;
    const place = getPlace(this.state.name);

    if (!place) {
      return (
        <MainBackground>
          <Banner title="Error" subtitle="Page Not Found">
            <Link to="/" className="btn-primary">
              Home
            </Link>
          </Banner>
        </MainBackground>
      );
    }
    const { name, slug, description, images } = place;
    const [mainImg, ...defaultImg] = images;
    return (
      <React.Fragment>
        <StyledMain img={mainImg || this.state.defaultImg}>
          <Banner title={`${name}`} subtitle={`${slug}`}>
            <Link to="/places" className="btn-primary">
              Places
            </Link>
          </Banner>
        </StyledMain>
        <section className="single-place">
          <div className="single-place-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name}></img>;
            })}
          </div>
          <div className="single-place-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
