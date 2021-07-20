// Importing Helpers
import React from "react";
import { Link } from "react-router-dom";

// Importing Components
import Hero from "../components/Hero.js";
import Banner from "../components/Banner.js";
import Services from "../components/Services.js";
import FeaturedRooms from "../components/FeaturedRooms.js";

// Functional Component
const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting at $200"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

// Default Export
export default Home;
