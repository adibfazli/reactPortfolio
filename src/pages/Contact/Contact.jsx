import React from "react";
import styled from "styled-components";


const Contact = () =>{

    return(
        <ContactStyleWrapper>
        <p>contact</p>
        </ContactStyleWrapper>
    );
}
export default Contact;

const ContactStyleWrapper = styled.div `
  p{
    font-family: neonTitle;
    color:pink;
    font-size: 40px;
    text-shadow: 0px 0px 30px pink;
  }

`