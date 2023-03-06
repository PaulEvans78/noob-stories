import React from "react";
import styled from "styled-components";
import linkedIcon from './assets/linkedIn_icon_white.png';
import instaIcon from './assets/instagram_icon_white.png';
import githubIcon from './assets/github_white.png';

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
  font-weight: 600;
  /* font-size: 1rem; */
  color: whitesmoke;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledFooterLink = styled(Link)`
    color: white;
    /* background-color: turquoise; */
    border-radius: 8px;
`;

const IconContainer = styled.div`
background-image: linear-gradient(#242424, #27dff7);
grid-area: icon;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 767px) {
  flex-direction: column;
  background-image: none;
  background-color: #27dff7;
}
`;


// const StyledIcon = styled.img`
// height: 2em;

// @media screen and (max-width: 767px) {
// height: 3em;
// margin: 0.5em;
// }
// `;


const Footer = () => {
    return (
        <StyledFooter>
            <p>Contact:</p>
            <StyledFooterLink to="paul.evans@chasacademy.se">paul.evans@chasacademy.se</StyledFooterLink>
            <p to="/mobile">+46 739908858</p>
        </StyledFooter>
    );
}

//  <IconContainer> 
//  <a href="https://www.linkedin.com/in/paul-evans-3a74605/"><StyledIcon  src={linkedIcon} alt="LinkedIn"/> </a>
//  <a href="https://www.linkedin.com/in/paul-evans-3a74605/"><StyledIcon  src={instaIcon} alt="Instagram"/> </a>
//  <a href="https://www.linkedin.com/in/paul-evans-3a74605/"><StyledIcon  src={githubIcon} alt="GitHub"/> </a>
//  </IconContainer> 


export default Footer;








