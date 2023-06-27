
import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material'
import Button from '@mui/material/Button'

const Container=styled.div`
height: 90px;
  width:100%;
  background-color: white;
  position:fixed;
  z-index:1;

`
const Container1=styled.div`
margin-top:10px;

`
const Input=styled.input`
border:20px solid black;`

const Label=styled.label`
border:20px solid black;`

const Form=styled.form`
border:20px solid black;`
const ContactUs = () => {
  const [value,setValue] =useState('')
  return (
    
    <div>
         <Announcement />
        {/* <Navbar/> */}
        <Stack >
        <Stack ml={30} mt={35} spacing={20}  direction='horizontal'>
       <Stack spacing={3} direction='row'>
       <TextField label="Name" variant='filled' /> 
          <TextField label="email" type='email' variant='filled'  value={value} required 
          onChange={(e)=> setValue(e.target.value)}  error={!value} helperText={!value ? 'Required':'do not share this password publicly'}/> 
       
       </Stack>
       </Stack>
       <Stack ml={80} direction='horizontal'><Button size='small' variant='contained' onClick={() => {
    alert('clicked');
  }}>send</Button>
       </Stack>
       </Stack>

        <Container1>
        <Newsletter />
        </Container1>
    <Footer />
    </div>
  )
}

export default ContactUs