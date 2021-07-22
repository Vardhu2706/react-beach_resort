// Importing Helpers
import React from "react";

// Importing Components
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../Context";
import Loading from "../components/Loading";

// Functional Component
function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;

        if (loading) {
          return <Loading title={"Loading Rooms..."} />;
        } else {
          return (
            <div>
              Room Container
              <RoomsFilter rooms={rooms} />
              <RoomsList rooms={sortedRooms} />
            </div>
          );
        }
      }}
    </RoomConsumer>
  );
}

// Default Export
export default RoomContainer;
