import React from "react";
// import { Link, useLocation } from "react-router-dom";
import Header from "../../components/about/Header";
import Page2 from "../../components/about/Page2";
import WhoWeAre from "../../components/about/WhoWeAre";
import OurMission from "../../components/about/OurMission";

const About = () => {
  return (
    <div className="bg-black">
      <Header />
      <Page2 />
      <WhoWeAre />
      <OurMission />
    </div>
  );
};

export default About;
