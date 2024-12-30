import React from "react";
import Header from "../../components/about/Header";
import Page2 from "../../components/about/Page2";
import WhoWeAre from "../../components/about/WhoWeAre";
import OurMission from "../../components/about/OurMission";

const About = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Header />
      <Page2 />
      <WhoWeAre />
      <OurMission />
    </div>
  );
};

export default About;
