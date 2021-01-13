import React from "react";
import styled from "styled-components";
import Iphone from "../../imageAndFont/images/iphoneImg.png"


const Contact = () =>{

    return(
        <ContactStyleWrapper>
          <div className="main_contact_parent_div">
            <div className="IphoneImg_Div" style={{ backgroundImage: `url(${Iphone})` }}>

            </div>
          </div>
        </ContactStyleWrapper>
    );
}
export default Contact;

const ContactStyleWrapper = styled.div `
  .main_contact_parent_div{
    height:80vh;

  }
  .IphoneImg_Div{
    height:100%;
    repeat:none;
    // border: 1px solid black;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

`