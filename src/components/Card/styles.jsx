import styled from 'styled-components';

export const CardContainer = styled.div`

/* grid-area: main; */
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2em;
margin-bottom: 2em;
width: 50vw;
background-color: #ffffff;
border-radius: 10px;
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
overflow: hidden;
box-shadow:  #545353 10px 15px 10px;
/* font-weight: bold; */

`;

export const StyledComputerImg = styled.img`
width: 100%;
height: 240px;
object-fit: cover;
align-self: center;
`;

export const StyledReactImg = styled.img`
/* width: 40%; */
height: 160px;
width: 160px;
/* justify-self: center; */
object-fit: cover;
margin-top: -3em;
border: 0.25em solid white;
border-radius: 50%;
`;

export const StyledCardp = styled.p`
color: black;
font-size: 20px;
padding: 0em 2.5em 1.5em;
text-align: center;
`;

export const StyledButton = styled.button`
background-color: white;
color: #58c9e5;
padding: 0.75em 1.5em;
margin-bottom: 2em;
border-radius: 10px;
font-size: 1.1rem;
font-weight: bold;
border: 2px solid #58c9e5 ;

`;