import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Badge from '@mui/material/Badge'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'
// import Cart from '../pages/Cart'
//  import {Box} from '@mui/material'


const Container = styled.div`
height: 90px;
  width:100%;
  background-color: white;
  position:fixed;
  z-index:1;
  margin-top:-20px;
  ${mobile({ height: '50px' })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:20px;
  ${mobile({ padding: '10px 0px' })}
`


// const Left = styled.div`
//   flex: 2;
//   display: flex;
//   align-items: center;
// `

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: 'none' })}
// `

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
//   width: 100%;
//   border-radius: 50px;
// `

// const Input = styled.input`
//   border: none;
//   width: 100%;
//   border-radius: 2%;
//   ${mobile({ width: '50px' })}
// `

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h2`
  padding-bottom:0px;
  margin:20px;
  font-weight: bold;
  margin-left:40px;
  ${mobile({ fontSize: '24px' })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`
const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover{
    text-decoration:underline;
    opacity:0.5;
  },
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-color:green;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`
const CartIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
const Image = styled.img`
  width: 70px;
  height:73px;
  border: none;
  cursor: pointer;
  padding:50x;
  margin:-15px;
  border-radius:50px;
  margin-left:-540px;
 padding-right:15px;
  ${mobile({ fontSize: '24px' ,height:'90px'})}
`;

const ProNav = () => {
  const quantity=useSelector((state)=>state.cart.quantity)
  console.log(quantity)
  const handleChange = () => {
    
  }
  return (
   
    <Container>
      <Paper elevation={4}>
      <Wrapper>
        <Center>
         
            <Logo>
              <Link to='/' style={{ textDecoration: 'none' }}>
           
           <Image src="../images/Danlogo.JPG"  />
          
           carepad
      
           </Link></Logo> 
        </Center>
         <Right>
        <MenuItem>
            <NavbarLink>
              <Link to='/' style={{ textDecoration: 'none' }}>
                HOME
              </Link>
            </NavbarLink>
          </MenuItem>
          <MenuItem>
            <NavbarLink>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                LOGIN
              </Link>
            </NavbarLink>
          </MenuItem>
          <MenuItem>
            <NavbarLink>
              <Link to='/register' style={{ textDecoration: 'none' }}>
                REGISTER
              </Link>
            </NavbarLink>
          </MenuItem>
          <Link to='/cart' style={{ textDecoration: 'none' }}>
          <MenuItem>
          
            <Badge badgeContent={quantity} color='primary'>
              <CartIcon onClick={handleChange}>
                <ShoppingCartOutlinedIcon />
              </CartIcon>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
        
      </Wrapper>
      </Paper>
    </Container>
    
  )
}

export default ProNav