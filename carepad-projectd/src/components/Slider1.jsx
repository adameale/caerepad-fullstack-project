import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
//import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import data from "../data";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

 const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 85%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: 'Alkatra', cursive;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider1 = () => {
    const [people] =useState(data);
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(()=>{
        const lastIndex=people.length-1;
        if(slideIndex<0){
            setSlideIndex(lastIndex);
        }
        if(slideIndex>lastIndex){
            setSlideIndex(lastIndex);
        }
    },[slideIndex,people])

    useEffect(()=>{
        let slider= setInterval(()=>{
            setSlideIndex(slideIndex+1)
        },5000)
        return ()=>{
            clearInterval(slider)
        }
    },[slideIndex])
//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//     } else {
//       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//     }
// };
return (

     <Container>
    <section>
    <div>
        {people.map((item,indexPeople)=>{
            const{id,image,name,title,quote} =item;
            let position="nextSlide";
            if(indexPeople===slideIndex)
            {
                position="activeslide"
            }
            if(indexPeople===slideIndex-1 || (slideIndex===0 && indexPeople===people.length-1)){
                position="activeslide" 
            }
            return(
                <article className={position} key={id}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                </article>
            )
        })}
        {/* <button className="prev" onClick={()=>setSlideIndex(slideIndex-1)}>
            <i className="fas fa-arrow-right"/>
        </button>
        <button className="prev" onClick={()=>setSlideIndex(slideIndex+1)}>
            <i className="fas fa-arrow-left" />
        </button > */}
    </div>
    </section>




      <Arrow direction="left" onClick={()=>setSlideIndex(slideIndex-1)}>
         <ArrowLeftIcon />
       </Arrow>
       <Wrapper slideIndex={slideIndex}>
         {sliderItems.map((item) => (
            <article>
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.quote}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
          </article>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>setSlideIndex(slideIndex+1)}>
        <ArrowRightIcon />
        </Arrow>
     </Container>
  );

}

export default Slider1