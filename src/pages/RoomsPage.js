// Importing Helpers
import React from "react";
import { Link } from "react-router-dom";

// Importing Components
import Hero from "../components/Hero";
import Banner from "../components/Banner";

// Importing Styles

// Functional Component
const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms" subtitle="">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

// Default Export
export default Rooms;
