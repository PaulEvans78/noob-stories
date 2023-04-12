import React from 'react';
import dude from '../assets/dude.png';
import styled from "styled-components";
import Skills from '../components/Card/skills';



const StyledImgContainer = styled.div`
/* grid-area: main; */
display: flex;
padding: 1em;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: bold;
color: whitesmoke;

@media screen and (max-width: 767px) {
    flex-direction: row-reverse;
    padding: 0em 3em 0em 3em;
    flex-direction: column;
    }
`;



const StyledMainImg = styled.img`
width: 40vw;
margin: 0em 2em 0em 2em;
box-shadow: 8px 8px 4px #414141;
border-radius: 8px;
`;

const Home = () => {

  return (
    <>
    <h1>The Dude</h1>
    <StyledImgContainer>
      <StyledMainImg src={dude} alt="The dude"/>
      <p>“LET ME EXPLAIN SOMETHING TO YOU. UM, I AM NOT ‘MR. LEBOWSKI.’ 
        YOU’RE MR. LEBOWSKI. I’M THE DUDE. SO THAT’S WHAT YOU CALL ME. 
        YOU KNOW, THAT OR, UH, HIS DUDENESS, OR UH, DUDER, OR EL DUDERINO 
        IF YOU’RE NOT INTO THE WHOLE BREVITY THING.” – THE DUDE</p>
    </StyledImgContainer>
    <Skills />
  </>
  );
}


export default Home;