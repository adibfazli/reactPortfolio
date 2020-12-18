import React from "react";
import styled from "styled-components";


const Projects = () =>{

    return(
        <ProjectsStyleWrapper>
        <p>Projects</p>
        </ProjectsStyleWrapper>
    );
}
export default Projects;

const ProjectsStyleWrapper = styled.div `
  p{
    font-family: neonTitle;
    color:pink;
    font-size: 40px;
    text-shadow: 0px 0px 30px pink;
  }

`