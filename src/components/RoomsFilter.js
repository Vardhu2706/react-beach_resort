// Importing Helpers
import React from "react";
import { useContext } from "react";

// Importing Room Context
import { RoomContext } from "../Context";
import Title from "../components/Title";

// Get All Unique Values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

// Functional Component
function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // Get Unique Types
  let types = getUnique(rooms, "type");

  // Add All
  types = ["all", ...types];

  // Map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // Get guests
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* Guests */}
        <div className="form-group">
          <label htmlFor="capacity">Max Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* End Of Select Type */}
      </form>
    </section>
  );
}

// Default Export
export default RoomsFilter;
