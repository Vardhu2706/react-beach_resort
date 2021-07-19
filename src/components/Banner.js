// Importing Helpers
import React from "react";

// Functional Component
function Banner({ title, subtitle, children }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

// Default Export
export default Banner;

// Default Props
Banner.defaultProps = {
  title: "404",
  subtitle: "Page Not Found",
  children: "Return Home",
};
