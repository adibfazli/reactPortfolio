import React from "react";
import styled from "styled-components";
import projectAPI from "../../utils/Api/ProjectDataAPI"


const Projects = () =>{

    return(
        <ProjectsStyleWrapper>
          {projectAPI.map(( p , idx ) => {
            return(
              <div>
                <h1>{p.name}</h1>
                <div class="slider">

                      <a href={"#slide"+(idx+1)+"/1"}>1</a>
                      <a href={"#slide"+(idx+1)+"/2"}>2</a>
                      <a href={"#slide"+(idx+1)+"/3"}>3</a>
                      <a href={"#slide"+(idx+1)+"/4"}>4</a>
                      <a href={"#slide"+(idx+1)+"/5"}>5</a>

                      <div class="slides">
                        <div id={"slide"+(idx+1)+"/1"}>1</div>
                        <div id={"slide"+(idx+1)+"/2"}>2</div>
                        <div id={"slide"+(idx+1)+"/3"}>3</div>
                        <div id={"slide"+(idx+1)+"/4"}>4</div>
                        <div id={"slide"+(idx+1)+"/5"}>5</div>
                      </div>
                    </div>
                    
              </div>
              );
            }
          )}
        </ProjectsStyleWrapper>
    );
}
export default Projects;

const ProjectsStyleWrapper = styled.div `
.main_projects_parent_div{
  border-radius:20px;
  border :2px solid pink;
  position:relative;
  height:70vh;
  background:transparent;
  box-shadow: 0px 0px 10px pink;
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












  * {
  box-sizing: border-box;
}

.slider {
  width: 300px;
  text-align: center;
  overflow: hidden;
}

.slides {
  display: flex;
  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  
  
  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /*
  scroll-snap-points-x: repeat(300px);
  scroll-snap-type: mandatory;
  */
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
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
/*   transform: scale(0.8); */
}
.author-info {
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.75rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
}
.author-info a {
  color: white;
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