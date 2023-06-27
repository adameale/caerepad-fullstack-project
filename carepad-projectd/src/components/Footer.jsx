import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
  import styled from "styled-components";
  import { mobile } from "../responsive";

  const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  text-decoration: none;
  font-weight:bold;
`;

const ListItem = styled.li`
  width: 50%;
  
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: space between;

`

const LinkA = styled(NavLink)`
display :flex;
justify-content: center;
`
const Footer = () => {
  return (
    <Container>
    <Left>
      <Logo>CAREPAD.</Logo>
      <Desc>
        Carepad is manufactured at DanEnergyET private company which exported to the regions that easily cant get pad in there area, also there is reusable pads.
      </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <Facebook   />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <Instagram />
        </SocialIcon>
       
               
        <SocialIcon color="55ACEE">
        <LinkA>
        <NavLink to="/https://twitter.com/DanEnergyET" style={{ textDecoration: 'none' }}>
          <Twitter />
          </NavLink>
        </LinkA>
        </SocialIcon>
        
        <SocialIcon color="E60023">
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
    </Left>
    <Center>
      <Title>Useful Links</Title>
      <List>
      <LinkA>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <ListItem>Home</ListItem>
        </NavLink>
        </LinkA>
        <LinkA>
      <NavLink to='/cart' style={{ textDecoration: 'none' }}>
        <ListItem>cart</ListItem>
        </NavLink>
        </LinkA>
        <LinkA>
      <NavLink to='/products' style={{ textDecoration: 'none' }}>
        <ListItem>products</ListItem>
        </NavLink>
        </LinkA>
        <LinkA>
      <NavLink to='/productlist' style={{ textDecoration: 'none' }}>
        <ListItem>productlist</ListItem>
        </NavLink>
        </LinkA>
        <LinkA>
      <NavLink to='/about us' style={{ textDecoration: 'none' }}>
        <ListItem>about</ListItem>
        </NavLink>
        </LinkA>
        <LinkA>
      <NavLink to='/contact us' style={{ textDecoration: 'none' }}>
        <ListItem>contact</ListItem>
        </NavLink>
        </LinkA>
      </List>
    </Center>
    <Right>
      <Title>Contact</Title>
      <ContactItem>
        <Room style={{marginRight:"10px"}}/> Addis Ababa Eth.
      </ContactItem>
      <ContactItem>
        <Phone style={{marginRight:"10px"}}/> +251 000000
      </ContactItem>
      <ContactItem>
        <MailOutline style={{marginRight:"10px"}} /> danenergyethiopia.com
      </ContactItem>
    </Right>
  </Container>
  )
}

export default Footer