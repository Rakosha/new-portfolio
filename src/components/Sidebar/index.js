import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'
const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} smooth={true} to="about">About</SidebarLink>
                    <SidebarLink onClick={toggle} smooth={true} to="projects">Projects</SidebarLink>
                    <SidebarLink onClick={toggle} smooth={true} to="resume">Resume</SidebarLink>
                    <SidebarLink onClick={toggle} smooth={true} to="hobbies">My Hobbies</SidebarLink>
                    <SidebarLink onClick={toggle} smooth={true} to="contact">Contact</SidebarLink>
                    {/* <SideBtnWrap>
                        <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    </SideBtnWrap> */}
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
