import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import dude from './assets/dude.png';



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
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: whitesmoke;
    font-size: 1.5rem;
     
    
    @media screen and (max-width: 767px) {
    padding: 0em 3em 0em 1em;
    }
`;

const StyledNavul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
    /* transform: open ?  */
`;

const StyledLink = styled(Link)`
    color: white;
    border-radius: 8px;
    text-decoration: none;


    @media screen and (max-width: 767px) {
    display: block;
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


const StyledDropLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0.25em 0em 0.25em 0em;
`;

const StyledDropul = styled.ul`
    text-align: right;
    padding: 1em;
`;



const StyledImg = styled.img`
  height: 4em;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 0.5em;
  box-shadow: 6px 6px 10px #1a1a1a;
  border-radius: 8px;
`;


//NAVBAR
// https://www.youtube.com/watch?v=ZlDASfsL7FI


const Navbar = () => {
    const [open, setOpen] = useState(false); // Hamburger menu
    const [openDD, setOpenDD] = useState(false); // Dropdown menu

    // let menuRef = useRef();

    // useEffect(() => {
    //     let handler =(e)=>{
    //         if(!menuRef.current.contains(e.target)){
    //             setOpen(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handler);

    //     return() =>{
    //         document.removeEventListener("mousedown", handler)
    //     }
    // });

    return (
        
        <StyledNav className="navbar" > 

       
                <Link to="/">
                    <StyledImg src={dude} alt="The dude"/>
                </Link>          

            <StyledNavul className="navul" style={{transform: open ? "translateX(0px)" : ""}}>

                <li><StyledLink className="dropDownli" to="/about" onClick={() => {setOpen(false)}}>About</StyledLink></li>
                <li><StyledLink className="dropDownli" to="/cv" onClick={() => {setOpen(false)}}>CV</StyledLink></li>

                <li><StyledLink className="portfolioLink dropDownli" onClick={() => {setOpenDD(!openDD)}} >Portfolio <span className="drop">▽</span></StyledLink>

                    <StyledDropul className={`dropDownul ${openDD? 'active' : 'inactive'}`} >
                        <StyledDropLink className="dropDownli" to="/portfolioFilm" onClick={() => {setOpen(false); setOpenDD(false)}}>Film</StyledDropLink>
                        <StyledDropLink className="dropDownli" to="/portfolioStills" onClick={() => {setOpen(false); setOpenDD(false)}}>Stills</StyledDropLink>
                        <StyledDropLink className="dropDownli" to="/portfolioWeb" onClick={() => {setOpen(false); setOpenDD(false)}}>Web</StyledDropLink>
                    </StyledDropul>
                </li>

                <li><StyledLink className="dropDownli" to="/contact" onClick={() => {setOpen(false)}}>Contact</StyledLink></li>
            </StyledNavul>
            
            <div onClick={() => setOpen(!open).StyledHamburger}>
                <Hamburger />
            </div>
            
            
        </StyledNav>
        

    );
}





//HAMBURGER MENU
function Hamburger() {
    // const [open, setOpen] = useState(false);

    return (  
      <StyledHamburger>
           <div className="hamburgerMenu">
           <div className="burger burger1"></div>
           <div className="burger burger2"></div>
           <div className="burger burger3"></div>
          </div>
          {/* <StyledNavul open={open}/> */}
      </StyledHamburger>
    );
  }

export default Navbar;