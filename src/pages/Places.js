import React from "react";
import MainBackground from "../Components/MainBackground";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import PlaceContainer from "../Components/PlacesContainer";
import Display from "./Display";

export const Places = () => {
  return (
    <React.Fragment>
      <MainBackground main="placesMain">
        <Banner title="Places" subtitle="Explore prime location">
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </Banner>
        <Display></Display>
      </MainBackground>
      <PlaceContainer></PlaceContainer>
    </React.Fragment>
  );
};
