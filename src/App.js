import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Tokenonics from "./components/Tokenonics";
import RoadMap from "./components/RoadMap";
import Questions from "./components/Questions";
import Explore from "./components/Explore";
import FollowUs from "./components/FollowUs";
import "./styles.css";

const App = () => {
  return (
    <>
    <div className="container">
      <Header />
      <Home />
      <Features/>
      <About/>
      <Tokenonics/>
      <RoadMap/>
      <Questions/>
      <Explore/>
      <FollowUs/>
      </div>
    </>
  );
};
export default App;
