import React from "react";
import styled from "styled-components";
import Setar from "../../imageAndFont/images/setarImg.png"
import Gagool from "../../imageAndFont/images/gagool.png"
import Car from "../../imageAndFont/images/car.png"


const About = () =>{

    return(
        <AboutStyleWrapper>
        <p>About</p>
        <img className="aboutImages rotate5" src={Gagool} alt=""/>
        <img className="aboutImages rotate-5" src={Car} alt=""/>
        <img className="aboutImages" src={Setar} alt=""/>
        </AboutStyleWrapper>
    );
}
export default About;

const AboutStyleWrapper = styled.div `
  p{
    font-family: neonTitle;
    color:pink;
    font-size: 40px;
    text-shadow: 0px 0px 30px pink;
  }
  .aboutImages{
    width:30%;
  }
  .rotate5{
    transform: rotate(3deg);
  }
  .rotate-5{
    transform: rotate(-2deg);
  }
`