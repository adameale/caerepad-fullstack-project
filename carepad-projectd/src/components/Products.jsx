import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:30px;
`;

  const Products = ({cat,filter,sort}) => {
    console.log(cat,filter,sort)
  const  [productss,setProduct] =useState([]);
  const  [filproducts,setfilProducts] =useState([]);
  useEffect(()=>{
   const getProducts = async ()=>{
    try{
    const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}`:"http://localhost:5000/api/products")
    setProduct(res.data)
    }catch(err){ }
    
   }
   getProducts()
  },[cat])

  useEffect(() => {
    cat &&
    setfilProducts(
        productss.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [productss, cat, filter]);

  useEffect(() => {
    if ((sort === "newest")) {
      setfilProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if ((sort === "asc")) {
      setfilProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
     <Announcement/>
    {/* <Navbar/>  */}
    <Container>
      {cat ?
      filproducts.map((item) => (
        <Product item={item} key={item.id} />
      )):productss.slice(0,8).map((item)=>( 
      <Product item={item} key={item.key}/>
      ))}
    </Container>
    <Footer/>
    </>
  );
};

export default Products;