// Importing Helpers
import React from "react";
import { Route, Switch } from "react-router";

// Importing Pages/Components
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import SingleRoomPage from "./pages/SingleRoomPage";
import ErrorPage from "./pages/ErrorPage";

import Navbar from "./components/Navbar";

// Importing Styles
import "./App.css";

// Functional Component
const App = () => {
  // Return
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms/" component={RoomsPage} />
        <Route exact path="/rooms/:slug" component={SingleRoomPage} />
        {/* Error Page */}
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

// Default Export
export default App;
