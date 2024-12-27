import React from "react";
import Banner from "../../components/home/Banner/Banner";
import MenCollection from "../../components/home/Men'sCollection/Men'sCollection";
import Grid from "../../components/home/Men'sCollection/Grid";
import GenzHeader from "../../components/home/GenzCollection/Header";
import GenzReelGrid from "../../components/home/GenzCollection/ReelGrid";
import GenzGrid from "../../components/home/GenzCollection/Grid";
import EssentialsHeader from "../../components/home/Men'sEssentials/Header";
import EssentialsGrid from "../../components/home/Men'sEssentials/Grid";
import Colors from "../../components/home/Colors/Colors";
import Testimonials from "../../components/home/Testimonials/Testimonials";


const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner/>
        <MenCollection />
        <Grid />
        <GenzHeader />
        <GenzReelGrid />
        <GenzGrid />
        <EssentialsHeader />
        <EssentialsGrid />
        <Colors />
        <Testimonials />
    </div>
  );
};

export default Home;
