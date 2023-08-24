import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Main from '../components/Main'
import { login } from '../redux/apiCalls'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw; 
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 254, 0.8),
      rgba(255, 255, 254, 0.8)
    ),
    
  background-size: cover;
  opacity:1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
height: 20px;
padding: 15px ;
border: 1px solid gray;
border-radius: 5px;
font-weight: 600;
margin-bottom: 15px;
font-size: 16px;
color:rgb(150, 144, 144);
flex-direction:column;
margin-right: 20px;
`

const Button = styled.button`
width: 200px;
border: none; 
background-color: darkblue;  
color: white; 
padding: 7px 10px;
font-weight: 600;
border-radius: 10px;
margin-top: 30px;
cursor: pointer;
  &:disabled{
    color:green;
    cursor: not-allowed;
  }
`
;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  `

  const Error=styled.span`
color:red
  `

const Login = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
const dispatch=useDispatch()
const {isFetching,error}=useSelector((state)=>state.user)
  const handleClick=(e)=>{
    e.preventDefault()
    login(dispatch,{username,password})
  }
  return (
    <>
    < Main/>
    <Container>
     
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
          <Input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong ...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    </>
  )
}

export default Login