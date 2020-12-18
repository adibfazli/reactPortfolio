import React from "react";
import styled from "styled-components";


const About = () =>{

    return(
        <AboutStyleWrapper>
        <p>About</p>
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