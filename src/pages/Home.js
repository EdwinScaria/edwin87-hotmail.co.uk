import React from "react";
import MainBackground from "../Components/MainBackground";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeaturedPlaces from "../Components/FeaturedPlaces";
import MidBanner from "../Components/MidBanner";

export const Home = () => {
  return (
    <React.Fragment>
      <MainBackground>
        <Banner title="Locations" subtitle="Explore the place with Dream High">
          <Link to="places" className="btn-primary">
            Locations
          </Link>
        </Banner>
      </MainBackground>
      <MidBanner></MidBanner>
      <FeaturedPlaces></FeaturedPlaces>
      <Services></Services>
    </React.Fragment>
  );
};
