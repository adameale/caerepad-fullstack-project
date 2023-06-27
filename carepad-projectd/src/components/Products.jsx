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
  const  [product,setProduct] =useState([]);
  const  [filproducts,setfilProducts] =useState([]);
  useEffect(()=>{
   const getProducts = async ()=>{
    try{
    const res = await axios.get( cat ? `http://localhost:3001/products?categories=${cat}`:"http://localhost:3001/products")
    setProduct(res.data)
    }catch(err){ }
    
   }
   getProducts()
  },[cat])

  useEffect(() => {
    cat &&
    setfilProducts(
        product.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, cat, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setfilProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
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
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    <Footer/>
    </>
  );
};

export default Products;