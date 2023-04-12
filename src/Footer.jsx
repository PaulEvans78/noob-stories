import React from "react";
import styled from "styled-components";
import linkedIcon from './assets/linkedIn_icon_white.png';
import instaIcon from './assets/instagram_icon_white.png';
import githubIcon from './assets/github_white.png';

// import {
//   Link
// } from "react-router-dom";

const footerData = [
  {
      id: 1,
      href: "https://www.linkedin.com/in/paul-evans-3a74605/",
      src: linkedIcon
  },
  {
      id: 2,
      href: "https://www.instagram.com/paulevanscreative/",
      src: instaIcon
      // icon: "./assets/instagram_icon_white.png"
  },
  {
      id: 3,
      href: "https://github.com/PaulEvans78",
      src: githubIcon
      // icon: "./assets/github_white.png"
  },
];

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
  color: whitesmoke;
  text-shadow: 6px 6px 5px #1a1a1a;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledFooterLink = styled.p`
  color: white;
  border-radius: 8px;
`;

const IconContainer = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

@media screen and (max-width: 767px) {
  flex-direction: column;
  background-image: none;
}
`;


const StyledIcon = styled.img`
  height: 2em;
  margin: 0.5em;
  box-shadow: 6px 6px 10px #1a1a1a;
  border-radius: 8px;



@media screen and (max-width: 767px) {
  height: 3em;
}
`;


const Footer = () => {
    return (
        <StyledFooter>
            <p>Contact:</p>
            <StyledFooterLink><a href="mailto:paul.evans@chasacademy.se">paul.evans@chasacademy.se</a></StyledFooterLink> 
            <p>+46 739908858</p>
            <Icons />
        </StyledFooter>
        
    );
}

const Icons = () => {
  
  return (
    <IconContainer> 

{footerData.map(Link => (
<a href={Link.href}>
<StyledIcon src={Link.src} key={Link.id}></StyledIcon>
</a>))}
    {/* <a href="https://www.linkedin.com/in/paul-evans-3a74605/"><StyledIcon  className = "linkedIcon" src={linkedIcon} alt="LinkedIn"/> </a>
    <a href="https://www.instagram.com/paulevanscreative/"><StyledIcon  className = "instaIcon" src={instaIcon} alt="Instagram"/> </a>
    <a href="https://github.com/PaulEvans78"><StyledIcon  className = "gitIcon" src={githubIcon} alt="GitHub"/> </a> */}
    </IconContainer>
  );
}

 


export default Footer;








