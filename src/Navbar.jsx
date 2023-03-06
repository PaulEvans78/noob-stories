import React from "react";
import styled from "styled-components";
// import React, { useState } from "react";

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
    padding-right: 2.5em;
    font-family: 'Roboto', sans-serif;
    color: whitesmoke;
    font-size: 1.25rem;

    @media screen and (max-width: 767px) {
    flex-direction: row-reverse;
    }
`;

const StyledLink = styled(Link)`
    color: white;
    /* background-color: turquoise; */
    border-radius: 8px;

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


const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/cv">CV</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <Hamburger />
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