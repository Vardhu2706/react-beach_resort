// Importing Helpers
import React from "react";

// Functional Component
function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

// Default Export
export default Hero;

// Default Props
Hero.defaultProps = {
  hero: "defaultHero ",
};
