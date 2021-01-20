import React from "react";
import styled from "styled-components";
import Iphone from "../../imageAndFont/images/iphoneImg.png"
import Card from "../../imageAndFont/images/card.png"


const Contact = () =>{

    return(
        <ContactStyleWrapper>
          <div className="main_contact_parent_div">
            <div className="card_Div">
              <img className="card_img" src={Card} alt=""/>
            </div>
            <div className="IphoneImgParent_Div">
              <div className="IphoneImg_Div" style={{ backgroundImage: `url(${Iphone})` }}></div>

            </div>
          </div>
        </ContactStyleWrapper>
    );
}
export default Contact;

const ContactStyleWrapper = styled.div `
  .main_contact_parent_div{
    height:80vh;
    display:grid;
    grid-template-columns: 1fr 1fr;

  }
  .IphoneImgParent_Div{
    
  }
  .IphoneImg_Div{
    height:100%;
    width: 70%;
    repeat:none;
    border: 1px solid black;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color:white;
  }
  .card_Div{
    width:100%;
  }
  .card_img{
    width:100%;
  }
`