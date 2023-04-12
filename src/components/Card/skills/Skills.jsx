import React from "react";
import upperPic from '../../../assets/screens.jpg';
import middlePic from '../../../assets/react.jpg'; 
import itPic from '../../../assets/it.jpg';
import clownPic from '../../../assets/clown.jpg'; 
import Card from '../../Card';


const Skills = () => {
    const skillsData = [
        {
            upperPic: upperPic,
            middlePic: middlePic,
            headline: "React Portfolio",
            description: "This React portfolio project is great for showcasing your skills, projects, and experience as a React developer.",
            buttonText: "View More",
            buttonLink: "/"
        },
        {
            upperPic: itPic,
            middlePic: clownPic,
            headline: "Oh So Scary",
            description: "You will Scream, You will cry, and if your lucky you will die",
            buttonText: "View More",
            buttonLink: "/"
        }
        
    ];

    return (
        <>
        {skillsData.map(skill => <Card {...skill} />)}
        </>
    )
}

export default Skills;