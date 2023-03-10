// import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from './assets/logo.png';
import dude from './assets/dude.png';
// import Home from './pages/Home';
// import Main from "./Main";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Cv from "./pages/Cv";
// import Contact from "./pages/Contact";
// import PortfolioFilm from "./pages/PortfolioFilm>";
// import PortfolioStills from "./pages/PortfolioStills";
// import PortfolioWeb from "./pages/PortfolioWeb";
// import Hero from "./Hero";


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


const StyledImgContainer = styled.div`
grid-area: main;
display: flex;
padding: 1em;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: bold;
color: whitesmoke;

@media screen and (max-width: 767px) {
    flex-direction: row-reverse;
    padding: 0em 3em 0em 3em;
    flex-direction: column;
    }
`;

const StyledMainImg = styled.img`
width: 40vw;
margin: 0em 2em 0em 2em;
`;



// const StyledImgTextContainer = styled.p`
// font-family: 'Roboto', sans-serif;
//     font-weight: 600;
//     color: whitesmoke;
//     font-size: 1.25rem;
// `;

//APP
function App() {

  return (
    <Router>
      <GridContainer>
      
      <LogoContainer> 
      <StyledImg src={logo} alt="Logo"/>
      </LogoContainer>
      
        <Navbar />
        {/* <Hero /> */}
        <MainContainer>
        <Switch>
          <Route path="/About">
            <p>About</p>
          </Route>
          <Route path="/Cv">
            <p>CV</p>
          </Route>
          <Route path="/Portfolio">
            <p>Portfolio</p>
          </Route>
          <Route path="/Contact">
            <p>Contact</p>
          </Route>
        </Switch>
        <h1>The Dude</h1>
        <StyledImgContainer>
          <StyledMainImg src={dude} alt="The dude"/>
          <p>“LET ME EXPLAIN SOMETHING TO YOU. UM, I AM NOT ‘MR. LEBOWSKI.’ 
            YOU’RE MR. LEBOWSKI. I’M THE DUDE. SO THAT’S WHAT YOU CALL ME. 
            YOU KNOW, THAT OR, UH, HIS DUDENESS, OR UH, DUDER, OR EL DUDERINO 
            IF YOU’RE NOT INTO THE WHOLE BREVITY THING.” – THE DUDE</p>
        </StyledImgContainer>
        {/* <StyledImgTextContainer>
          
        </StyledImgTextContainer> */}
        </MainContainer>
          <Footer />
      </GridContainer>
    </Router>
  );
}


export default App;