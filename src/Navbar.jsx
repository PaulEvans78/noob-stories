import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import dude from './assets/dude.png';



import {
    Link
} from "react-router-dom";


// WORKSHOP


// function showLoop (arrayToLoop) {
//     console.log(arrayToLoop);

//     for (let i = 0; i < arrayToLoop.Length; i++) {
//         console.log(arrayToLoop[i]);
//         returnArray.push("Hej");

//     }
//     return returnArray;
// }

// showLoop(links);



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
    /* align-items: center; */
    /* transform: open ?  */
`;

const StyledLink = styled(Link)`
    color: white;
    border-radius: 8px;
    text-decoration: none;
    /* display: flex; */
    /* flex-direction: row; */
    /* flex-wrap: nowrap; */
    /* justify-content: space-around;  */
    display: block; 
    text-align: right;
    margin: 1em;

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

const StyledBurgerBars = styled.div `
    width: 2rem;
    height: 0.25rem;
    margin-bottom: 0.25rem;
    border-radius: 10px;
    background-color: whitesmoke;
    transform-origin: 1px;
    transition: all 0.2s linear;
`;

const StyledDropLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0.25em 0em 0.25em 0em;
    display: block; 
    text-align: right;
`;

const StyledDropul = styled.ul`
    text-align: right;
    padding: 1em;
    
    position: absolute;
    top: 3.5em;
    background-image: linear-gradient(#4895a1, #242424);
    border-radius: 10px;
    width: 3em;

    /* ${({ openDD }) => openDD  && `
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px); 
        transition: var(--speed) ease;
    `} */

    @media screen and (max-width: 767px) {
     background-image: linear-gradient(#263E43, #388d98);
     width: 75%;
     margin-top: 10.5em;
     padding: 1em;
    }
`;



const StyledImg = styled.img`
  height: 4em;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 0.5em;
  box-shadow: 6px 6px 10px #1a1a1a;
  border-radius: 8px;
`;


const StyledSpanDrop = styled.span`
  font-size:1rem;
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


const links = [
    {
        id: 1,
        to: "/",
        text: "Home",
        onClick: () => { setOpen(false); setOpenDD(false); }
    },
    {
        id: 2,
        to: "/about",
        text: "About",
        onClick: () => { setOpen(false); setOpenDD(false); }
    },
    {
        id: 3,
        to: "/cv",
        text: "CV",
        onClick: () => { setOpen(false); setOpenDD(false); }
    },
    {
        id: 4,
        to: "/portfolio",
        text: "Portfolio ▽",
        onClick: () => {setOpenDD(!openDD)} 
    },
    {
        id: 5,
        to: "/contact",
        text: "Contact",
        onClick: () => { setOpen(false); setOpenDD(false); }
    },
];
    return (
        
        <StyledNav className="navbar" > 

       
                <Link to="/">
                    <StyledImg src={dude} alt="The dude" onClick={() => {setOpen(false); setOpenDD(false)}}/>
                </Link>          

            <StyledNavul className="navul" style={{transform: open ? "translateX(0px)" : ""}}>

              {links.map(link => <StyledLink className="dropDownli" onClick={link.onClick} to={link.to} key={link.id}>{link.text}</StyledLink>)}

                {/* <li><StyledLink className="dropDownli" to="/about" onClick={() => {setOpen(false)}}>About</StyledLink></li>
                <li><StyledLink className="dropDownli" to="/cv" onClick={() => {setOpen(false)}}>CV</StyledLink></li> */}

<li> <StyledLink className="portfolioLink dropDownli"></StyledLink>
                
                {/* <StyledSpanDrop className="drop">▽</StyledSpanDrop> */}

                 {/* <li><StyledLink className="portfolioLink dropDownli" onClick={() => setOpenDD(!openDD)} >Portfolio <span className="drop">▽</span> {openDD ? }</StyledLink> */}

                {/* <StyledDropul className="dropDownul" > */}
                    <StyledDropul className={`dropDownul ${openDD? 'active' : 'inactive'}`} >   
                        <StyledDropLink className="dropDownli" to="/portfolioFilm" onClick={() => {setOpen(false); setOpenDD(false)}}>Film</StyledDropLink>
                        <StyledDropLink className="dropDownli" to="/portfolioStills" onClick={() => {setOpen(false); setOpenDD(false)}}>Stills</StyledDropLink>
                        <StyledDropLink className="dropDownli" to="/portfolioWeb" onClick={() => {setOpen(false); setOpenDD(false)}}>Web</StyledDropLink>
                    </StyledDropul>
                </li>
                
                {/* const foo = [{link: "/", text: "Home"}, {link: "/contact", text: "Contact"}, {link: "/about", text: "About"}] */}

                {/* <li><StyledLink className="dropDownli" to="/contact" onClick={() => {setOpen(false)}}>Contact</StyledLink></li> */}
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
           <StyledBurgerBars className="burger burger1"></StyledBurgerBars>
           <StyledBurgerBars className="burger burger2"></StyledBurgerBars>
           <StyledBurgerBars className="burger burger3"></StyledBurgerBars>
          </div>
          {/* <StyledNavul open={open}/> */}
      </StyledHamburger>
    );
  }

export default Navbar;