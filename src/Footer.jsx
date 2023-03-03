import React from "react";
import styled from "styled-components";

import {
    Link
} from "react-router-dom";


const StyledFooter = styled.footer`
  grid-area: footer;
  background-image: linear-gradient(#242424, #27dff7);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0em 2em 0em 2em;
  font-family: 'Roboto', sans-serif;
  /* font-size: 1rem; */
  color: whitesmoke;
`;

const StyledFooterLink = styled(Link)`
    color: white;
    /* background-color: turquoise; */
    border-radius: 8px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Paul Evans</p>
            <StyledFooterLink to="/email">paul.evans@chasacademy.se</StyledFooterLink>
            <p to="/mobile">+46 739908858</p>
        </StyledFooter>
    );
}

export default Footer;








