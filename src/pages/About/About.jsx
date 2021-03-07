import React from "react";
import styled from "styled-components";
import Setar from "../../imageAndFont/images/setarImg.png"
import Gagool from "../../imageAndFont/images/gagool.png"
import Car from "../../imageAndFont/images/car.png"
import Mac from "../../imageAndFont/images/mac.png"


const About = () =>{

    return(
        <AboutStyleWrapper>
          <div className="items_div">
            <div className="imageAndinfo_div">
              <img className="aboutImages rotate-5" src={Mac} alt=""/>
              <div>
                <h1 className="title">About Me.</h1>
                <p className="discription">
                  I am one of those people who strongly beleves that every body shoud pursue thir passion ratherthan listen to others to dicide what to pursue. with that being said, I was a chemical engineering student and sposed to become a chemical engineer based on my parents friends disision, but one day in my early college years I took a computer science class by mistake, and after attending the class I did't need to ever take it for my major, I felt a extreame bond between me and the subject. It might sound funny but I can discribe that feeling like falling in love with sombody. Ever since that day I changed my major to Computer Science and I havn't had a day pass by without touching a code eventhough small.
                </p>
                <span>Enough about me and how I got here, if you like you can get to know two of my good buddys down below.</span>
              </div>
            </div>
            <div className="imageAndinfo_div">
              <img className="aboutImages rotate5" src={Gagool} alt=""/>
              <div>
                <h1 className="title">Gagool the pug.</h1>
                <p className="discription">Here is my best buddy. his name is Gagool. he is a gourmand who is extremely fond of eating. in the picture you can see, he is looking at the camera with one eye, and looking at the pinut in my brothers hand with the other. I never understood how he can do that, but I guss every thing you are passionate about you will get good at it. </p>
              </div>
            </div>
            <div className="imageAndinfo_div">
              <img className="aboutImages rotate-5" src={Car} alt=""/>
              <div>
                <h1 className="title">TJ the Jeep.</h1>
                <p className="discription">jflkdsflkgjdasfg</p>
              </div>

            </div>
            <div className="imageAndinfo_div">
              <img className="aboutImages" src={Setar} alt=""/>
              <div>
                <h1 className="title">Setar the instrument.</h1>
                <p className="discription">jflkdsflkgjdasfg</p>
              </div>

            </div>
          </div>
        </AboutStyleWrapper>
    );
}
export default About;

const AboutStyleWrapper = styled.div `
  .imageAndinfo_div{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
  }
  .imageAndinfo_div:nth-of-type(even){
    // background-color: red;
    flex-direction: row-reverse;
  }
  .title{
    color:white;
  }
  .discription{
    color:white;
    font-size:20px;
  }
  span{
    color: #f2f2f2;
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



// secret acc key : T+c/ASCGTNw/rBNeT4RHB3sXcEXRUu9JoY74EOu3
// access key Id: AKIAS4WBIUMQXXAJH5NH