import React from "react";
import styled from "styled-components";
import { useHistory, NavLink } from "react-router-dom";



const Nav = () =>{
  const history = useHistory();
    return(
        <NavStyleWrapper>
            <div className="nav">
                <h1>Adib</h1>
                <div className="navButtons">
                    <NavLink
                      activeclassname="active_main_menu"
                      className="navItems home"
                      name="/"
                      to="/"
                    >Home</NavLink>
                    <NavLink
                      activeclassname="active_main_menu"
                      className="navItems home"
                      name="/projects"
                      to="/projects"
                      >Projects</NavLink>
                    <NavLink
                      activeclassname="active_main_menu"
                      className="navItems home"
                      name="/about"
                      to="/about"
                      >About</NavLink>
                    <NavLink
                      activeclassname="active_main_menu"
                      className="navItems home"
                      name="/contact"
                      to="/contact"
                      >Contact</NavLink>
                </div>

                
            </div>
        </NavStyleWrapper>
    );
}
export default Nav;

const NavStyleWrapper = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Rubik:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200&display=swap');

.nav{
  width :100%;
  height: 70px;
  display:flex;
  align-items:center;
  background-color: green;
  padding: 0 2%;
}
.navButtons{
    display:flex;
    width:40%;
    justify-content: space-between;
}
.nav h1{
  // font-weight: 700;
  font-size:50px;
  font-family: 'Abril Fatface', cursive;
  color: white;
}
.navItems{
    text-decoration: none;
    font-family: 'Tajawal', sans-serif;
    color: white;
    font-size: 25px;
    margin:0;
  }




`