// Importing Helpers

import React, { Component } from "react";
import { Link } from "react-router-dom";

// Importing Components
import { RoomContext } from "../Context";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

// Class Component
class SingleRoomPage extends Component {
  // Constructor
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = RoomContext;

  // Render
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    // Check if Empty
    if (!room) {
      return (
        <div className="error">
          <h3>Room Not Found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    // Room Params
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    // eslint-disable-next-line no-unused-vars
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        {/* Banner */}
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`} subtitle="">
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>

        {/* Room Details */}
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

// Default Export
export default SingleRoomPage;
