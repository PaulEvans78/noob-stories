import React from 'react';
import { CardContainer, StyledComputerImg, StyledReactImg, StyledCardp, StyledButton } from './styles';
import screens from '../../assets/screens.jpg';
import react from '../../assets/react.jpg';



function Card () {

    return (
    <CardContainer>
        <StyledComputerImg src={screens} alt="Computer Screens" />
        <StyledReactImg src={react} alt="React Logo" />
        
        <h2>React Portfolio</h2>
        <StyledCardp>This React portfolio project is great for showcasing your skills, projects, and experience as a React developer.</StyledCardp>
        <StyledButton>View More</StyledButton>

    </CardContainer>
    )
}

export default Card;