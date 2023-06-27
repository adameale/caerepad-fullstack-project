
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import ProNav from '../components/ProNav'

const Desc=styled.div`
margin-top:40ox;
align-items:center;
`
const Title=styled.h1`
margin-top:30px;
align-items:center;


`

const AboutUs = () => {

  return (
    <>
         
         <Announcement />
         <ProNav/>

        <Desc>
       <Title>
         About us
        </Title>
        
      
  <details>
      <summary> we are web developer team .</summary>
      <p>         we are working  this website in addis ababa
          around cmc at Dan Energy ethiopia plc 
          All your important info in one place
          </p>
          <p>
          Keep your important work documents to hand through the CarePAD app. 
          Users can view their staff badge, DBS and training certificates on their profile page.
           With our 5 minute registration, once you are ready to work, you can login and start picking shifts.
            It’s as simple as that!</p>
      <p>We Thanks For Visiting Us</p>
    </details>
    </Desc>
    
    <Newsletter />
    <Footer />
        </>
  )
}

export default AboutUs