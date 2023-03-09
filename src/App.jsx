// import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from './assets/logo.png';
// import Main from "./main";


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";




// LOGO
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
grid-template-rows: 7rem repeat(3, 1fr) 7rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas:
"logo top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer";

@media screen and (max-width: 767px) {
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(2, 1fr);
grid-template-areas:
"logo top "
"main main "
"main main "
"main main "
"footer footer";
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
        </MainContainer>
          <Footer />
      </GridContainer>
    </Router>
  );
}


export default App;