import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import Main from '../components/Main';
import Announcement from '../components/Announcement';
import { useSelector } from 'react-redux';
import { useEffect, useState,useHistory } from 'react';
import StripeCheckout from  'react-stripe-checkout'
import {userRequest} from '../requestMethod'

const KEY =process.env.REACT_APP_STRIPE


const Container = styled.div`
margin-top:10px;`;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top:100px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top:100px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart =useSelector((state)=>state.cart)
  const [stripeToken,setStripeToken]=useState(null)
   const history=useHistory()
  const onToken=(token)=>{
    setStripeToken(token)

  }
 useEffect(()=>{
  const makeRequest =async ()=>{
    try {
      const res=await userRequest("/checkout/payment",{
        tokenId:stripeToken,
        amount:cart.total*1,
        
      })
    } catch (error) {
      
    }
  }
 },[stripeToken])
  return (
    <Container>
      <Announcement/>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE ORDERING</TopButton>
          <TopTexts>
            <TopText>Ordering Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {
            cart.products?.map((product)=>(
              <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <b>color:<ProductColor color={product.color} /></b>
                  <ProductSize>
                    <b>size : {product.size}</b>
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                 <AddIcon/>
                  <ProductAmount> {product.quantity}</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>birr {product.price*product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}
            <Hr />
            
          </Info>
          <Summary>
            <SummaryTitle>ORDER PAD</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> birr {cart.total}</SummaryItemPrice>
            </SummaryItem>
            
            <SummaryItem>
              <SummaryItemText>ordering Discount</SummaryItemText>
              <SummaryItemPrice>birr 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> birr {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="dan carepad Shop"
              image="https://twitter.com/DanEnergyET/photo"
              billingAddress
              shippingAddress
              description="Your total is birr 20"
              amount={cart.total*1}
              token={onToken}
              stripeKey={KEY}>

            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
      
    </Container>
  );
};

export default Cart;