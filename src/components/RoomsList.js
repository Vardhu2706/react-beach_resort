// Importing Helpers
import React from "react";

// Importing Components
import Room from "./Room";

// Functional Component
function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>No Rooms Found.</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}

// Default Export
export default RoomsList;
