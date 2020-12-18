import React from "react";
import styled from "styled-components";
import projectAPI from "../../utils/Api/ProjectDataAPI"


const Projects = () =>{

    return(
        <ProjectsStyleWrapper>
          <div className="main_projects_parent_div y mandatory-scroll-snapping" dir="ltr">
            {projectAPI.map(( p , idx ) => {
              return(
                <div className="each_project_Div">
                  <h1>{p.name}</h1>
                  <div className="projectsNavBar_parent">
                    <div className="projectsNavBar_child_div">
                      <a href={"#nav"+(idx+1)+"/1"} className="projectsNavBar_child_items">Images</a>
                      <a href={"#nav"+(idx+1)+"/2"} className="projectsNavBar_child_items">Info</a>
                      <a href={"#nav"+(idx+1)+"/3"} className="projectsNavBar_child_items">Technologies</a>
                      <a href={"#nav"+(idx+1)+"/4"} className="projectsNavBar_child_items">Goals</a>
                    </div>
                  </div>
                  {/* Images */}
                  <div id={"nav"+(idx+1)+"/1"} className="slider">

                    <div class="slides">
                      <div id={"slide"+(idx+1)+"/1"}>1</div>
                      <div id={"slide"+(idx+1)+"/2"}>2</div>
                      <div id={"slide"+(idx+1)+"/3"}>3</div>
                      <div id={"slide"+(idx+1)+"/4"}>4</div>
                      <div id={"slide"+(idx+1)+"/5"}>5</div>
                    </div>

                    <a href={"#slide"+(idx+1)+"/1"}>1</a>
                    <a href={"#slide"+(idx+1)+"/2"}>2</a>
                    <a href={"#slide"+(idx+1)+"/3"}>3</a>
                    <a href={"#slide"+(idx+1)+"/4"}>4</a>
                    <a href={"#slide"+(idx+1)+"/5"}>5</a>

                  </div>

                  {/* Info */}
                  <div id={"nav"+(idx+1)+"/2"} className="">
                    <h1>Info</h1>
                  </div>

                  {/* Technologies */}
                  <div id={"nav"+(idx+1)+"/3"}>
                    <h1>tech</h1>
                  </div>

                  {/* Goals */}
                  <div id={"nav"+(idx+1)+"/4"}>
                    <h1>Goals</h1>
                  </div>
                      
                </div>
                );
              }
            )}
          </div>
        </ProjectsStyleWrapper>
    );
}
export default Projects;

const ProjectsStyleWrapper = styled.div`
* {
  box-sizing: border-box; 
}
.main_projects_parent_div{
  border-radius:20px;
  position:relative;
  height:71vh;
  background:transparent;
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

  p{
    font-family: neonTitle;
    color:pink;
    font-size: 40px;
    text-shadow: 0px 0px 30px pink;
    position:absolute;
    top:-10.9%;
    left:2%;
  }
   // _________________________START_________________Projects Nav
  .projectsNavBar_parent{
    height:30px;
    display:flex;
    justify-content:center;
    width:100%;
  }
  .projectsNavBar_child_div{
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    align-items:center;
    width:40%;
    // border:1px solid gray;
    // border-radius: 20px;
  }
  .projectsNavBar_child_div{
    
  }
  
  .projectsNavBar_child_items{
    cursor:pointer;
    height:100%;
    display:flex;
    color:white;
    justify-content:center;
    align-items:center;
    border-radius:20px;
  }
  .projectsNavBar_child_items:hover{
    background-color: gray;
    color: black;
  }
  // ________________________END__________________Projects Nav
  .each_project_Div{
    padding: 1rem;
    height: 100vh;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
  }
  
  













 

.slider {
  width: 500px;
  text-align: center;
  overflow: hidden;
}

.slides {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  // scroll-snap-points-x: repeat(300px);
  // scroll-snap-type: mandatory;
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 20px;
  background-color:black;
  border-radius: 10px;
  border: 2px solid orange;
}
.slides::-webkit-scrollbar-thumb {
  background: orange;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
  
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 500px;
  height: 500px;
  margin-right: 50px;
  border-radius: 10px;
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
img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider > a {
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0 0.5rem 0;
  position: relative;
}
.slider > a:active {
  top: 1px;
}
.slider > a:focus {
  background: #000;
}

/* Don't need button navigation */
@supports (scroll-snap-type) {
  .slider > a {
    display: none;
  }
}


`