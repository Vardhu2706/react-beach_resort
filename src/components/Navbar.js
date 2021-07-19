// Importing Helpers
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Importing Components/Images
import { MdMenu } from "react-icons/md";
import logo from "../images/logo.svg";

// Importing Styles

// Class Component
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  // Handle Toggle
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" onClick={this.handleToggle} />
            </Link>
            <button type="button" className="nav-btn">
              <MdMenu className="nav-icon" onClick={this.handleToggle} />
            </button>
          </div>

          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li onClick={this.handleToggle}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={this.handleToggle}>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// Default Export
export default Navbar;
