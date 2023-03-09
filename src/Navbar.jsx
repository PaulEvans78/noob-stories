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
    
    /* align-items: flex-start;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    border-left: 2px solid pink;
    margin-top: 0;
    text-align: right;
    transform: translateX(500px);
    transition: 0.5s ease-in-out; */
    }
`;

const StyledLink = styled(Link)`
    color: white;
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

const DropDownul = styled.ul`
    display: none;
`;




//NAVBAR
const Navbar = () => {
    // const [open, setOpen] = useState(false);
    return (
        <StyledNav style={{transform: open ?"translateX(0px)" : ""}}>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/cv">CV</StyledLink>
            <StyledLink to="/portfolio">Portfolio
            <DropDownul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
            </DropDownul>
            </StyledLink> 
            <StyledLink to="/contact">Contact</StyledLink>

            <div onClick={() => setOpen(!open).StyledHamburger}>
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