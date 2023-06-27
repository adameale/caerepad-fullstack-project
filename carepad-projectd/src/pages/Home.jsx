import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/slider";
import Categories from "../components/Catagories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Testimonial from "../components/Testimonial";

// const Overflow=styled.div`
// overflow:hidden;
// `

// const Container=styled.div`
// overflow:scroll;
// `



const Home = () => {
  return (
    <>
   
      <Announcement />
    <Navbar/>
    <Slider/>
    <Categories />
    {/* <Products /> */}
    <Newsletter />
    <Testimonial/>
    <Footer />
   
    </>
   
   
  )
}

export default Home