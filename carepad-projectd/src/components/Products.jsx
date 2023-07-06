import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Announcement from "./Announcement";
import Footer from "./Footer";
// import Navbar from "./Navbar";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:30px;
`;

  const Products = ({ cat,  filters, sort  }) => {
    console.log(cat,filters,sort)
  const  [products,setProduct] =useState([]);
  const  [filterProducts,setFilterProducts] =useState([]);

  useEffect(()=>{
   const getProducts = async ()=>{
    try{
    const res = await axios.get( 
      cat 
      ? `http://localhost:5000/api/products?categories=${cat}`
      :"http://localhost:5000/api/products")
    setProduct(res.data)
   }catch(err){ }
    
   }
   getProducts()
  },[cat])

  useEffect(() => {
    cat &&
    setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if ((sort === "newest")) {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if ((sort === "asc")) {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
     <Announcement/>
    {/* <Navbar/>  */}
    <Container>
      {cat 
      ? filterProducts?.map((item) => (
        <Product item={item} key={item.id} />
      )):products.slice(0,8)?.map((item)=>( 
      <Product item={item} key={item.id}/>
      ))}
    </Container>
    <Footer/>
    </>
  );
};

export default Products;