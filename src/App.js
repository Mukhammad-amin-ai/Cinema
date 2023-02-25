import React, { Component } from "react";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Album from "./Components/Album/Album";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Body />
        <Album/>
        <Footer/>
      </div>
    );
  }
}
export default App;
