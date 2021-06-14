import React from "react";
import Navbar from "./Navbar";
import Slide1 from "./Slides/Slide1";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div id="slide-container">
        <Slide1 />
      </div>
    </div>
  );
}
