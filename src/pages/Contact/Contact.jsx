import React , {useState , useEffect} from "react";
import styled from "styled-components";
import Iphone from "../../imageAndFont/images/iphoneImg.png";
import Back1 from "../../imageAndFont/images/back1.png";
import Card from "../../imageAndFont/images/card.png";
import ResumeIcon from "../../imageAndFont/images/icons/resume.png";
import MessageIcon from "../../imageAndFont/images/icons/message.png";
import InfoIcon from "../../imageAndFont/images/icons/info.png";
import EmailIcon from "../../imageAndFont/images/icons/email.png";

const Contact = () =>{
  const [IphoneNav , setIphoeneNav] = useState("Home");

    return(
        <ContactStyleWrapper>
          <div className="main_contact_parent_div">
            <div className="card_Div">
              <img className="card_img" src={Card} alt=""/>
            </div>
            <div className="IphoneImgParent_Div">
              <div className="IphoneImg_Div" style={
                { backgroundImage: `url(${Iphone}) , url(${Back1}) ` }
              }>
                <div className="icon_container">
                  <img src={MessageIcon} alt="" className="icon" onClick={()=> setIphoeneNav("Message")}/>
                  <img src={ResumeIcon} alt="" className="icon" onClick={()=> setIphoeneNav("Reaume")}/>
                  <img src={InfoIcon} alt="" className="icon" onClick={()=> console.log(Date().toLocaleString())}/>
                  <img src={EmailIcon} alt="" className="icon" onClick={()=> setIphoeneNav("Email")}/>
                </div>
              </div>

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
    // border: 1px solid black;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display:flex;
    justify-content:center;
    position:relative;
  }
  .card_Div{
    width:100%;
  }
  .card_img{
    width:100%;
  }
  .icon_container{
    // background-color:pink;
    width:55%;
    // height: 15%;
    position:absolute;
    bottom: 10%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    // justify-content:center;
    align-items: center;
    gap:10px;
  }
  .icon{
    width:100%;
    cursor: pointer;
  }

`