import React from "react";
import styled from "styled-components";


const Home = () =>{

    return(
        <HomeStyleWrapper>
            <body>
                <div className="sign">
                    <span className="fast-flicker">A</span>
                    di
                    <span className="flicker">b</span>
                    __Faz
                    <span className="fast-flicker">l</span>
                    i
                </div>
            </body>
        </HomeStyleWrapper>
    );
}
export default Home;

const HomeStyleWrapper = styled.div `
// *{
//     width:100%;
// }
// p{
//     font-family: neonTitle;
//     color:#00FFFF;
//     font-size: 40px;
//     text-shadow: 0px 0px 30px #00FFFF;
//   }






  body {
    background-color: #141114;
    background-image: linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px),
      linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  }
  
  .sign {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    // background-image: radial-gradient(
    //   ellipse 50% 35% at 50% 50%,
    //   #6b1839,
    //   transparent
    // );
    transform: translate(-50%, -50%);
    letter-spacing: 2;
    left: 50%;
    top: 50%;
    font-family: "neonTitle";
    text-transform: uppercase;
    font-size: 6em;
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    animation: shine 2s forwards, flicker 3s infinite;
  }
  
  @keyframes blink {
    0%,
    22%,
    36%,
    75% {
      color: #ffe6ff;
      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
    28%,
    33% {
      color: #ff65bd;
      text-shadow: none;
    }
    82%,
    97% {
      color: #ff2483;
      text-shadow: none;
    }
  }
  
  .flicker {
    animation: shine 2s forwards, blink 3s 2s infinite;
  }
  
  .fast-flicker {
    animation: shine 2s forwards, blink 10s 1s infinite;
  }
  
  @keyframes shine {
    0% {
      color: #6b1839;
      text-shadow: none;
    }
    100% {
      color: #ffe6ff;
      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
  }
  
  @keyframes flicker {
    from {
      opacity: 1;
    }
  
    4% {
      opacity: 0.9;
    }
  
    6% {
      opacity: 0.85;
    }
  
    8% {
      opacity: 0.95;
    }
  
    10% {
      opacity: 0.9;
    }
  
    11% {
      opacity: 0.922;
    }
  
    12% {
      opacity: 0.9;
    }
  
    14% {
      opacity: 0.95;
    }
  
    16% {
      opacity: 0.98;
    }
  
    17% {
      opacity: 0.9;
    }
  
    19% {
      opacity: 0.93;
    }
  
    20% {
      opacity: 0.99;
    }
  
    24% {
      opacity: 1;
    }
  
    26% {
      opacity: 0.94;
    }
  
    28% {
      opacity: 0.98;
    }
  
    37% {
      opacity: 0.93;
    }
  
    38% {
      opacity: 0.5;
    }
  
    39% {
      opacity: 0.96;
    }
  
    42% {
      opacity: 1;
    }
  
    44% {
      opacity: 0.97;
    }
  
    46% {
      opacity: 0.94;
    }
  
    56% {
      opacity: 0.9;
    }
  
    58% {
      opacity: 0.9;
    }
  
    60% {
      opacity: 0.99;
    }
  
    68% {
      opacity: 1;
    }
  
    70% {
      opacity: 0.9;
    }
  
    72% {
      opacity: 0.95;
    }
  
    93% {
      opacity: 0.93;
    }
  
    95% {
      opacity: 0.95;
    }
  
    97% {
      opacity: 0.93;
    }
  
    to {
      opacity: 1;
    }
  }
  

`