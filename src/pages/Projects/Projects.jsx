import React from "react";
import styled from "styled-components";
import projectAPI from "../../utils/Api/ProjectDataAPI";

const Projects = () => {
  return (
    <ProjectsStyleWrapper>
      <div className="main_projects_parent_div y mandatory-scroll-snapping" dir="ltr">
        {projectAPI.map((p, idx) => {
          return (
            <div className="each_project_Div">
              <div className="title_div">
                <h2>{p.name}</h2>
              </div>

              <div className="projectsNavBar_parent">
                <div className="projectsNavBar_child_items_container">
                  <a href={"#nav"+(idx + 1) + "/1"} className="projectsNavBar_child_items">Images</a>
                  <a href={"#nav"+(idx + 1)+"/2"} className="projectsNavBar_child_items">Informaton</a>
                  <a href={"#nav" + (idx + 1) + "/3"} className="projectsNavBar_child_items">Technologies</a>
                  <a href={"#nav" + (idx + 1) + "/4"} className="projectsNavBar_child_items">Goals</a>
                </div>

                <div className="projectsNavBar_child_div">
                  {/* Images */}
                  <div id={"nav"+(idx + 1)+"/1"} className="imageAndPointsGrid_Div">

                    <div className="slider">

                      <div className="numbers_container">
                        {p.image.map((i , ii)=>{
                          return(
                            <a href={"#slide" + (idx+1) + "/" + (ii+1)}>
                              <img  className="projectScreenShot_preview_img" src={i} />
                            </a>
                          )
                        })}
                      </div>

                      <div className="slides">
                        {p.image.map((i , ii)=>{
                          return(
                            <div id={"slide" + (idx+1) + "/" + (ii+1)}>
                              <img className="projectScreenShot" src={i} />
                            </div>
                          )
                        })}
                      </div>
                      
                    </div>

                    <div>
                      <p className="description">{p.description}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div id={"nav"+(idx + 1)+"/2"} className="infoGrid_Div">
                    {p.info.map((i , ii)=>{
                      return(
                      <div className="infoMainParent_div" key={ii}>
                        <img className="infoEmoji" src={i.img} alt=""/>
                        <p className="info_p">{i.info}</p>
                      </div>
                      )
                    })}
                  </div>

                  {/* Technologies */}
                  <div id={"nav" + (idx + 1) + "/3"} className="techLogoParentContainer_Div">
                    {p.tech.map((e)=>{
                        return(
                          <div>
                            <img src={e.logo} className="techLogo" />
                            <p className="techInfo" >{e.info}</p>
                          </div>
                        )
                      })}
                  </div>

                  {/* Goals */}
                  <div id={"nav" + (idx + 1) + "/4"}>
                    <h5>{p.goals}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ProjectsStyleWrapper>
  );
};
export default Projects;

const ProjectsStyleWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200&display=swap');
  * {
    box-sizing: border-box;
  }
  .main_projects_parent_div {
    margin-top: 1vh;
    // border-radius: 5px;
    // border:1px solid black;
    position: relative;
    height: 89vh;
    // background-color: #242526;
    display: flex;
    overflow: auto;
    flex: none;
  }
  .main_projects_parent_div.y {
    width: 100%;
    // height: 100vh;
    flex-flow: column nowrap;
  }
  .y.mandatory-scroll-snapping {
    scroll-snap-type: y mandatory;
  }
  .each_project_Div {
    // padding: 1rem;
    height: 100vh;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
  }
  .title_div{
    width:100%;
    // background-color: white;
  }
  .title_div h2{
    font-family: 'Tajawal', sans-serif;
    color:white;
  }






  .projectsNavBar_parent {
    width: 100%;
    height:85vh;
    text-align: center;
    overflow: hidden;
    // background-color: red;
    // margin-top:80px;
  }
  
  // _________________________START_________________Projects Nav
  .projectsNavBar_child_items_container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    // background-color:yellow;
    height:5%;
  }
  .projectsNavBar_child_items {
    cursor: pointer;
    display: flex;
    width:100%;
    color: white;
    text-decoration:none;
    justify-content: center;
    font-size:25px;
    font-family: 'Tajawal', sans-serif;
  }

  .projectsNavBar_child_items:hover {
    background-color: gray;
    color: black;
  }
  // ________________________END__________________Projects Nav









  

  .projectsNavBar_parent > a {
    display: inline-flex;

    width: 2.5rem;
    height: 2.5rem;
    color: white;
    // background: white;
    text-decoration: none;
    align-items: center;
    justify-content: space-between;
    // border-radius: 50%;
    // margin: 0 0 0.5rem 0;
    position: relative;
  }
  .projectsNavBar_parent > a:active {
    top: 1px;
  }
  .projectsNavBar_parent > a:focus {
    background: #000;
  }

  /* Don't need button navigation */
  @supports (scroll-snap-type) {
    .projectsNavBar_parent > a {
      display: none;
    }
  }











  .projectsNavBar_child_div {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    height:90%;
  }
  .projectsNavBar_child_div::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    // background-color: black;
    // border-radius: 10px;
    // border: 2px solid orange;
  }
  .projectsNavBar_child_div::-webkit-scrollbar-thumb {
    background: orange;
    border-radius: 2px;
  }
  .projectsNavBar_child_div::-webkit-scrollbar-track {
    background: transparent;
  }




// this makes the image to expand V V V

  .projectsNavBar_child_div > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100%;
    // height: 100vh;
    margin-right: 50px;
    border-radius: 10px;
    // background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

    // display: flex;
    // justify-content: center;
    // align-items: center;
    font-size: 100px;

    // display:grid;
    // grid-template-columns:2fr 1fr;
  }
  
  

















  
  .slider {
    width: 100%;
    // width: 530px;
    text-align: center;
    overflow: hidden;
    display:flex;
    // background-color:yellow;
  }

  .slides {
    width:100%;
    height:100%;
    display: flex;
    align-items:center;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    // scroll-snap-points-x: repeat(300px);
    // scroll-snap-type: mandatory;
  }
  .slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: white;
    // border-radius: 10px;
    // border: 2px solid orange;
  }
  .slides::-webkit-scrollbar-thumb {
    background: orange;
    // border-radius: 2px;
  }
  .slides::-webkit-scrollbar-track {
    background: transparent;
  }
  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100%;
    height: 500px;
    margin-right: 50px;
    // border-radius: 10px;
    background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  .slides > div:target {
    // transform: scale(0.8);
  }
  .projectScreenShot {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .numbers_container{
    width:30px;
    display:grid;
    grid-template-rows:1fr 1fr 1fr 1fr 1fr;
    // background-color:pink;
    // height: 100%;
    margin-right:4%;
  }
  .projectScreenShot_preview_img{
    width:400%;
  }
  .numbers_container > a {
    display: inline-flex;
    // width: 100%;
    // height: 100%;
    // background-color: white;
    // border-radius:50px;

    text-decoration: none;
    align-items: center;
    justify-content: center;
    font-size:25px;
  }
  .numbers_container > a:active {
    top: 1px;
  }
  .numbers_container > a:focus {
    background: #000;
  }

  /* Don't need button navigation */
  @supports (scroll-snap-type) {
    .numbers_container > a {
      display: none;
    }
  }






  .description{
    font-size:20px;
    color:white;
  }

  .techLogoParentContainer_Div{
    // background-color:yellow;
    height:100%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .techLogo{
    width:30%;
    position: static;
    object-fit: contain;
    margin:0;
    padding:0;
  }

  .techInfo{
    font-size: 25px;
    margin:-3%;
    padding:0;
    color: white;
    
  }

  ///////////////////////////////////// info
  .infoGrid_Div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:20px;
  }
  .infoMainParent_div{
    display: flex;
    flex-direction:column;
    margin-top:10%;
    align-items:center;
    wisth:100%;
  }
  .info_p{
    color : white;
    font-size: 20px;
    width:100%;
  }
  .infoEmoji{
    width:20%;
  }
`;
