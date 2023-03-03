// import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
`;




// ICONS

// import {
//   linkedIn_icon_white.png,
//   instagram_icon_white.png
// } from './assets';

import linkedIcon from './assets/linkedIn_icon_white.png';
import instaIcon from './assets/instagram_icon_white.png';
import githubIcon from './assets/github_white.png';


const IconContainer = styled.div`
background-image: linear-gradient(#242424, #27dff7);
/* max-width: 6rem; */
/* padding-left: 1.5em; */
grid-area: icon;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;


const StyledIcon = styled.img`
height: 30%;
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
            <IconContainer> 
              <StyledIcon  src={linkedIcon} alt="LinkedIn"/> 
              <StyledIcon  src={instaIcon} alt="Instagram"/>
              <StyledIcon  src={githubIcon} alt="GitHub"/> 
            </IconContainer>
      </GridContainer>
    </Router>
  );
}


export default App;