import React from "react";
// import React, { useState } from "react";
import styled from "styled-components";


import {
    Link
} from "react-router-dom";

const StyledNav = styled.nav`
    background-image: linear-gradient(#27dff7, #242424);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: top;
    /* padding-right: 2em; */
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: whitesmoke;
    font-size: 1.25rem;
    
    @media screen and (max-width: 767px) {
    flex-direction: row-reverse;
    padding: 0em 3em 0em 3em;
    }
`;

const StyledNavul = styled.ul`
    list-style-type: none;
    display: flex;
    /* flex-direction: row; */
    justify-content: space-around;
    width: 100%;
`;

const StyledLink = styled(Link)`
    color: white;
    border-radius: 8px;
    text-decoration: none;


    @media screen and (max-width: 767px) {
    display: none;
    }
`;


const StyledHamburger = styled.div`
    display: none;
    width: 2rem;
    height: 2rem;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 10;
    @media screen and (max-width: 767px) {
    display: flex;
    }
`;






//NAVBAR
const Navbar = () => {
    // const [open, setOpen] = useState(false);
    return (
        // <StyledNav style={{transform: open ?"translateX(0px)" : ""}}>
        <StyledNav>
            <StyledNavul>
            <li><StyledLink to="/about">About</StyledLink></li>
            <li><StyledLink to="/cv">CV</StyledLink></li>
            <li><StyledLink to="/portfolio">Portfolio</StyledLink></li>
            <li><StyledLink to="/contact">Contact</StyledLink></li>
            </StyledNavul>

            {/* <div onClick={() => setOpen(!open).StyledHamburger}> */}
            <div>
            <Hamburger />
            </div>

        </StyledNav>
        
    );
}


//HAMBURGER MENU
function Hamburger() {
    return (  
      <StyledHamburger>
           <div className="hamburgerMenu">
           <div className="burger burger1"></div>
           <div className="burger burger2"></div>
           <div className="burger burger3"></div>
          </div>
      </StyledHamburger>
    );
  }

export default Navbar;