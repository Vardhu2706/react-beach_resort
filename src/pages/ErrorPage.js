// Importing Helpers
import React from "react";
import { Link } from "react-router-dom";

// Importing Components
import Hero from "../components/Hero";
import Banner from "../components/Banner";

// Functional Components
const ErrorPage = () => {
  return (
    <Hero hero="defaultHero">
      <Banner>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

// Default Export
export default ErrorPage;
