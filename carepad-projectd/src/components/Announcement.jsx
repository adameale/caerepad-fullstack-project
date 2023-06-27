import styled from 'styled-components'

const Container = styled.div`
position:fixed;
  z-index:2;
  width:100%;
  top:0;
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`
const Title = styled.h2`

 
`;


const Announcement = () => {
  return <Container><Title><marquee>Super Deal!  you can visit our Orders and we also donate it for females </marquee></Title> </Container>
}

export default Announcement