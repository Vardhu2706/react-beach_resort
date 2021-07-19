// Importing Helpers
import React from "react";

// Importing Components
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import SingleRoomPage from "./pages/SingleRoomPage";
import ErrorPage from "./pages/ErrorPage";

// Importing Styles
import "./App.css";

// Functional Component
const App = () => {
  return (
    <div>
      <HomePage />
      <RoomsPage />
      <SingleRoomPage />
      <ErrorPage />
    </div>
  );
};

// Default Export
export default App;
