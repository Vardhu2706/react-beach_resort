// Importing Helpers
import React, { Component } from "react";

// Importing Data
import data from "./data";

// Context API
const RoomContext = React.createContext();

// Class Component
class RoomProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
    };
  }

  // Get Data

  componentDidMount() {
    let rooms = this.formatData(data);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({ rooms, featuredRooms, sortedRooms: rooms, loading: false });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// Consumer
const RoomConsumer = RoomContext.Consumer;

// Exporting Context, Provider, Consumer
export { RoomProvider, RoomConsumer, RoomContext };