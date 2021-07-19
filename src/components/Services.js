// Importing Helpers
import React, { Component } from "react";

// Importing Components
import Title from "./Title";
import { BiDrink } from "react-icons/bi";
import { MdRestaurantMenu, MdAirportShuttle } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";

// Class Component
class Services extends Component {
  // State
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          icon: <BiDrink />,
          title: "Free Drinks",
          info: "Your drinks, are on us.",
        },
        {
          icon: <MdRestaurantMenu />,
          title: "International Cuisine",
          info: "Enjoy the tastes from around the world.",
        },
        {
          icon: <MdAirportShuttle />,
          title: "Shuttle Service",
          info: "Free shuttle service from airport.",
        },
        {
          icon: <GiPartyPopper />,
          title: "Endless Parties",
          info: "Parties and music all night long.",
        },
      ],
    };
  }

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

// Default Export
export default Services;
