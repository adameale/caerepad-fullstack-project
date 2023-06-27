import styled from 'styled-components'
import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const NavbarLink = styled(Link)`
  color: white;
  background-color:pink;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  align-items:center;
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

const Main = () => {
  return (
    <NavbarLink>
    <Stack direction='horizontal' >
           <Stack direction='row' spacing={3} justifyContent="center"
  alignItems='center'> 
             <Link to='/' style={{ textDecoration: 'none' }}>
                Home
              </Link>
              <Link to='/about us' style={{ textDecoration: 'none' }}>
              About Us
              </Link>
              <Link to='/contact us' style={{ textDecoration: 'none' }}>
              Contact Us
              </Link>
           </Stack>
           </Stack>
           </NavbarLink>
  )
}

export default Main