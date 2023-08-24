import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom"

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
   
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
   color:pink;
   margin-bottom: 20px;
`;

const Button = styled.button`
width: 150px;
border: none; 
background-color: darkblue;  
color: white; 
padding: 7px 10px;
font-weight: 600;
border-radius: 10px;
margin-top: 30px;
cursor: pointer;
`;


const CatagoryItem = ({item}) => {
  return (
   <Container>
    <Link to={`/products/${item.cat}`}>
    <Image src={item.img} />
    <Info>
        <Title>{item.title}</Title>
        <Button>Order Now</Button>
    </Info>
    </Link>
   </Container>
  );
};

export default CatagoryItem ;