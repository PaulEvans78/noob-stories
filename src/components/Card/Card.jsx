import React from 'react';
import { CardContainer, StyledComputerImg, StyledReactImg, StyledCardp, StyledButton, Styledh2 } from './styles';
import upperPic from '../../assets/screens.jpg';
import middlePic from '../../assets/react.jpg';



function oldCard () {

    return (
    <CardContainer>
        <StyledComputerImg src={upperPic} alt="Computer Screens" />
        <StyledReactImg src={middlePic} alt="React Logo" />
        
        <Styledh2>React Portfolio</Styledh2>
        <StyledCardp>This React portfolio project is great for showcasing your skills, projects, and experience as a React developer.</StyledCardp>
        <StyledButton>View More</StyledButton>

    </CardContainer>
    )
}

function Card (props) {

    return (
    <CardContainer>
        <StyledComputerImg src={props.upperPic} alt="Computer Screens" />
        <StyledReactImg src={props.middlePic} alt="React Logo" />
        
        <Styledh2>{props.headline}</Styledh2>
        <StyledCardp>{props.description}</StyledCardp>
        <StyledButton>{props.buttonText}</StyledButton>

    </CardContainer>
    )
}

export default Card;