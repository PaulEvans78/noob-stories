// import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import linkedIcon from './assets/linkedIn_icon_white.png';
import instaIcon from './assets/instagram_icon_white.png';
import githubIcon from './assets/github_white.png';
// import Main from "./main";


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";




// LOGO

import logo from './assets/logo.png';

// const MyButton = styled.button`
//   padding: 4em;
//   background-color: papayawhip;
// `;

const LogoContainer = styled.div`
background-image: linear-gradient(#27dff7, #242424);
padding-left: 1.5em;
grid-area: logo;
`;

const StyledImg = styled.img`
  height: 80%;
  margin-right: 1em;
`;




// MAIN CONTAINER

const MainContainer = styled.div`
grid-area: main;

`;

const GridContainer = styled.div`
min-height: 100vh;
min-width: 400px;
display: grid;
/* border: 1px solid turquoise; */
grid-template-rows: 7rem repeat(3, 1fr) 7rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas:
"logo top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer icon icon";

@media screen and (max-width: 767px) {
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(2, 1fr);
grid-template-areas:
"logo top "
"main main "
"main main "
"main main "
"footer footer"
"icon icon";
  }
`;




// ICONS

// import {
//   linkedIn_icon_white.png,
//   instagram_icon_white.png
// } from './assets';




const IconContainer = styled.div`
background-image: linear-gradient(#242424, #27dff7);
grid-area: icon;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 767px) {
  flex-direction: column;
  background-image: none;
  background-color: #27dff7;
}
`;


const StyledIcon = styled.img`
height: 2em;

@media screen and (max-width: 767px) {
height: 3em;
margin: 0.5em;
}
`;

//APP

function App() {

  return (
    <Router>
      <GridContainer>
      <LogoContainer> 
        <StyledImg  src={logo} alt="Logo"/> 
      </LogoContainer>
        <Navbar />
        <MainContainer>
        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/portfolio">
            <p>Portfolio</p>
          </Route>
        </Switch>
        <h1>Hello Paul</h1>
        {/* <Main /> */}
        </MainContainer>
          <Footer />
          <IconContainer />
            <IconContainer> 
              <a href="https://www.linkedin.com/in/paul-evans-3a74605/"><StyledIcon  src={linkedIcon} alt="LinkedIn"/> </a>
              <a href="https://www.linkedin.com/in/paul-evans-3a74605/"><StyledIcon  src={instaIcon} alt="Instagram"/> </a>
              <a href="https://www.linkedin.com/in/paul-evans-3a74605/"><StyledIcon  src={githubIcon} alt="GitHub"/> </a>
            </IconContainer>
      </GridContainer>
    </Router>
  );
}


export default App;