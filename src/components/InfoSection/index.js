import React from 'react'
import { Button } from '../ButtonElement'
import { ButtonExternal } from '../ButtonElementExternal'
import { ImgWrap } from './InfoElements'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img} from './InfoElements'
import Fade from 'react-reveal/Fade';

const InfoSection = ({externalBtn,projectLink,primary,dark,dark2,lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       
                       <Column1>
                        <Fade left>
                        <TextWrapper>
                            <TopLine lightText={lightText}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                {externalBtn ? 
                                    <Button 
                                to={'home'} 
                                smooth={true}
                                spy={true}
                                exact={true}
                                offset={-80}
                                duration={500}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>{buttonLabel}</Button> 
                                
                                : 
                                
                                <ButtonExternal 
                                href={projectLink} 
                                smooth={true}
                                spy={true}
                                target="_blank"
                                exact={true}
                                offset={-80}
                                duration={500}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>{buttonLabel}</ButtonExternal>
                            }
                            </BtnWrap>
                        </TextWrapper>
                        </Fade>
                        </Column1>
                        
                        
                        <Column2>
                            <Fade right>
                                <ImgWrap>
                                    <Img src={img} alt={alt} />
                                </ImgWrap>
                            </Fade>
                        </Column2>
                        
                   </InfoRow>
               </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
