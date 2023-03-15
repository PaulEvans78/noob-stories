import React, { useState } from "react";
import styled from "styled-components";

import {
    Link
} from "react-router-dom";

// import styled from "styled-components";
// import PortfolioFilm from "./pages/PortfolioFilm";
// import PortfolioStills from "./pages/PortfolioStills";
// import PortfolioWeb from "./pages/PortfolioWeb";


const StyledDropLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0.25em;
    /* text-align: left; */
`;

const StyledDropul = styled.ul`
/* background-color: #242424; */
/* display: none; */
/* background-image: linear-gradient(#275055, #242424); */
/* display: block; */
text-align: right;
padding: 1em;
`;




 
const DropDown = () => {
        
    return (
        <nav className="dropDownNav">
        <StyledDropul className="dropDownul">
        <StyledDropLink className="dropDownli" to="/PortfolioFilm">Film</StyledDropLink>
        <StyledDropLink className="dropDownli" to="/PortfolioStills">Stills</StyledDropLink>
        <StyledDropLink className="dropDownli" to="/PortfolioWeb">Web</StyledDropLink>
        </StyledDropul>
        </nav>
        
    );
}

export default DropDown;