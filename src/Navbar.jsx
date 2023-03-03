import React from "react";
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
    padding-right: 2.5em;
    font-family: 'Roboto', sans-serif;
    color: whitesmoke;
    font-size: 1.25rem;
`;

const StyledLink = styled(Link)`
    color: white;
    /* background-color: turquoise; */
    border-radius: 8px;
`;
const Navbar = () => {
    return (
        <StyledNav>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/cv">CV</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
        </StyledNav>
    );
}

export default Navbar;