import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Cv from "./pages/Cv";
import Contact from "./pages/Contact";
import PortfolioFilm from "./pages/PortfolioFilm";
import PortfolioStills from "./pages/PortfolioStills";
import PortfolioWeb from "./pages/PortfolioWeb";


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


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
"top top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer";

@media screen and (max-width: 767px) {
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(2, 1fr);
grid-template-areas:
"top top "
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

        <Navbar />
  
        <MainContainer>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/cv">
              <Cv />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/portfoliofilm">
              <PortfolioFilm />
            </Route>

            <Route path="/portfoliostills">
              <PortfolioStills />
            </Route>

            <Route path="/portfolioweb">
              <PortfolioWeb />
            </Route>

          </Switch>
        </MainContainer>

          <Footer />
      </GridContainer>
      
    </Router>
  );
}


export default App;