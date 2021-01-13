import React from "react";
import styled from "styled-components";
import Setar from "../../imageAndFont/images/setarImg.png"


const About = () =>{

    return(
        <AboutStyleWrapper>
        <p>About</p>
        <img src={Setar} alt=""/>
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

`