import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {

    const toggleScrollTop = () =>{
        scroll.scrollToTop();
    }

    const toggleScrollBot = () => {
        scroll.scrollToBottom();
    }

    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to="/" onClick={toggleScrollTop}>
                       HP
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks smooth={true} to="about">About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks smooth={true} to="projects">Projects</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks smooth={true} to="resume">Resume</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks smooth={true} to="hobbies">Hobbies</NavLinks>
                       </NavItem>
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink onClick={toggleScrollBot} to="/contact">Contact</NavBtnLink>
                   </NavBtn>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar
