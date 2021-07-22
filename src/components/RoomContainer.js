// Importing Helpers
import React from "react";

// Importing Components
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../Context";
import Loading from "../components/Loading";

// Functional Component
function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading title={"Loading Rooms..."} />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

// Default Export
export default withRoomConsumer(RoomContainer);
