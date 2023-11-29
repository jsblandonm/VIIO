import React from "react";
import Popular from "../components/Popular";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import NewCollection from "../components/NewCollection";
import NewsLetter from "../components/NewsLetter";

function HomePage() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
}

export default HomePage;
