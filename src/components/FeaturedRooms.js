// Importing Helpers
import React, { Component } from "react";
import { RoomContext } from "../Context";

// Importing Components
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

// Class Component
class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading title={"Best Offers Coming Up..."} /> : rooms}
        </div>
      </section>
    );
  }
}

// Default Export
export default FeaturedRooms;
