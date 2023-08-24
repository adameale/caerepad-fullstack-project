import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    /* url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center; */
  /* background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; */
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-weight: 600;
  
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin:20px;
`;

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


    
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

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
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;