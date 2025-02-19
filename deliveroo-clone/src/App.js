import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import TrackOrders from "./components/TrackOrders";
import Offer from "./components/Offer";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Carousel />
      <TrackOrders />
      <Offer />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
