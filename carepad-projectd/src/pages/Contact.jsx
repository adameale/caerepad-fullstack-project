import React from "react"; 
import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option"
import "bootstrap/dist/css/bootstrap.min.css";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";


const Core = styled.div`
    margin-top: 20px;
    padding: 0;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: visible;
    background-color: #f5f5f5;
    color: black;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   
   
`
const Contact = () => {
  return (
    <React.Fragment>
        <Announcement/>
        <Navbar/>
     <Core>
      <div>
        <Container style={{marginTop:'75px'}}>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h6 className="display-4 mb-4" style={{fontSize:'40px', marginTop:'40px'}}>Contact Me</h6>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a style={{color:'black'}} href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    style={{backgroundColor:'white', boxShadow:' 0 3px 10px rgb(0 0 0 / 0.2)'}}
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    style={{backgroundColor:'white', boxShadow:' 0 3px 10px rgb(0 0 0 / 0.2)'}}
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                style={{backgroundColor:'white', color:'black', boxShadow:' 0 3px 10px rgb(0 0 0 / 0.2)'}}
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        </Container>
       </div>
      </Core>
      </React.Fragment>
      
  );
}
export default Contact