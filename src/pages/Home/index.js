import React from "react";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import Slider from "../../components/Slider";
import TopSellProducts from "../../components/TopSellProducts";
import Footer from "../../components/Footer";


function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Slider />
      <TopSellProducts />
      <Footer />


    </>
  );
}

export default Home;

