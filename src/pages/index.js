import React, {useState} from 'react'
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection/index';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour, homeObjFive,homeObjSix } from '../components/InfoSection/data';
import ResumeSection from '../components/ResumeSection';
import DividerSection from '../components/DividerSection/index';
import CodePenProjectsSection from '../components/CodePenProjectsSection/index';
import HobbiesSection from "../components/HobbiesSection/index";
import Fade from 'react-reveal/LightSpeed';
const Home = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/> 
           <HeroSection />
           <DividerSection id="about" rotate first/>
           <DividerSection headerText="About Me"/>
           <DividerSection rotate reverse/>
            <InfoSection {...homeObjOne}/>
            <DividerSection id="projects" rotate/>
            <DividerSection headerText="My Projects"/>
            <DividerSection rotate reverse/>
            <InfoSection {...homeObjTwo}/>
            <DividerSection rotate/>
            <InfoSection {...homeObjThree}/>
            <DividerSection rotate reverse/>
            <InfoSection {...homeObjFour}/>
            <DividerSection rotate/>
            <InfoSection {...homeObjFive}/>
            <DividerSection rotate reverse/>
            <InfoSection {...homeObjSix}/>
            <DividerSection rotate/>
            <DividerSection headerText="Additional Small CodePen Projects"/>
            <DividerSection rotate reverse/>
            <CodePenProjectsSection />
            <DividerSection id="resume" rotate/>
            <DividerSection headerText="My Skills"/>
            <DividerSection rotate reverse/>
            <ResumeSection />
            <DividerSection id="hobbies" rotate/>
            <DividerSection headerText="My Hobbies"/>
            <DividerSection rotate reverse/>
            <HobbiesSection />
                        
            
        </>
    )
}

export default Home
