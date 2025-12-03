import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/css/fonts.css";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Trending from "./Components/Trending";
import Categories from "./Components/Categories";
import SellingProductsSection from "./Components/SellingProductsSection";
import Deal from "./Components/Deal";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Trending />
      <Categories />
      <SellingProductsSection />
      <Deal/>
      <Footer/>
    </>
  );
}

export default App;
