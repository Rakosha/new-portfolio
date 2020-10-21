import React, {useState} from 'react'
import video from '../../videos/video.mp4'
import {Button} from "../ButtonElement"
import {HeroLinksWrapper,HeroContainer,HeroBg,VideoBg, HeroBtnWrapper,HeroContent, ArrowForward, ArrowRight, HeroH1, HeroP} from "./HeroElemets"

import github from "../../images/githubIcon.svg"
import codepen from "../../images/codepenIcon.svg"
import linkedin from "../../images/linkedInIcon.svg"
import {animateScroll as scroll} from 'react-scroll'
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const HeroSection = () => {
    const [hover, setHover] = useState('false');

    const onHover = () => {
        setHover(!hover);
    }

    const toggleScrollBot = () => {
        scroll.scrollToBottom();
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <Fade left>
                    <HeroH1>Hryhorii Pertaia</HeroH1>
                </Fade>
                <Fade delay={300} left>
                    <HeroP>Front-end Web Developer</HeroP>
                </Fade>
                <Tada delay={500}>
                    <HeroBtnWrapper>
                        <Button onClick={toggleScrollBot} primary="true" dark="true" onMouseLeave={onHover} onMouseEnter={onHover} to="contact">Contact Me {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                    </HeroBtnWrapper>
                </Tada>
                <HeroLinksWrapper>
                    <Fade delay={500} up>
                        <a target="_blank" href="https://codepen.io/rakosha/"><img src={codepen} rel="" /></a>
                    </Fade>
                    <Fade delay={600} up>
                        <a target="_blank" href="https://github.com/Rakosha/"><img src={github} rel="" /></a>
                    </Fade>
                    <Fade delay={700} up>
                        <a target="_blank" href="https://www.linkedin.com/in/hryhorii-pertaia/"><img src={linkedin} rel="" /></a>
                    </Fade>
                </HeroLinksWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
