import React from 'react';
import styled from "styled-components";
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect";
import images from "../../images/images.jpeg"
import HeroBgAnimation from '../../HeroBgAnimation';
import {Tilt} from"react-tilt";
import { motion} from "framer-motion";
import { headContainerAnimation, headTextAnimation } from "../../utils/motion";
import StarsCanvas from "../canvas/Stars"


const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 80px 30px;
    z-index: 1;
    position: relative;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 70% 95%, 0% 100%);
    
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
`;

const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;

    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column; /* Stack vertically on smaller screens */
    }
`;

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    color: white;
    gap:6px;
    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    color: white;
    display: flex;
    justify-content: end;
    @media (max-width: 960px) {
        order: 1;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justofy-contents: center;
    }
`;

const Title= styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme}) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }
    
    @media (max-width: 960px) {
       font-size:40px;
       line-height:48px;
       margin-bottom: 8px;
    } 
`;

const TextLoop= styled.div`
    font-weight: 600px;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme}) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;;
    }
    
    @media (max-width: 960px) {
       font-size:22px;
       line-height:48px;
       margin-bottom: 16px;
    }
`;

const Span =styled.div`
    cursor: pointer;
    color: ${({ theme}) => theme.text_primary};
`;

const SubTitle = styled.div`
    line-height:32px;
    font-size: 20px;
    margin-bottom:42px;
    color: ${({ theme}) => theme.text_primary +95};
    @media (max-width: 960px) {
        text_align: center;;
    }
    
    @media (max-width: 960px) {
       font-size:16px;
       line-height:24px;
    }
`;


const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
    );
    background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
    );
    background: -webkit-linear-gradient(
    225deg, 
    hsla(271, 100%, 50%, 1) 0%, 
    hsla(294, 100%, 50%, 1) 100%
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634; /* updated color */
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;
    color: #fff; /* optional: ensures text is visible on dark backgrounds */
    
    &:hover{
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box:shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
    }

    @media (max-width: 640px) {
       font-size:16px;
       padding: 12px 0;
    }
`;

const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height:100%;
    max-weight: 400px;
    max-height: 400px;
    border: 2px solid ${({ theme}) => theme.primary};
    z-index: 1;

    @media (max-width: 640px) {
       max-weight: 280;
       max-height: 280;
    }
`;

const Herobg = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    right:0;
    bottom:0;
    left: 50%;
    width: 100%;
    height: 100%;
    max-weight: 1360px;
    justify-content: end;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    z-index:0;

    @media (max-width: 960px){
    justify-content: center;
    padding:0 ;
    }
`;
const StyledTypewriter = styled.span`
    color: ${({ theme }) => theme.primary}; /* Apply theme color to Typewriter text */
`;


const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <Herobg>
                    <StarsCanvas/>
                    <HeroBgAnimation/>
                </Herobg>
                
                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeftContainer>
                            <motion.div {...headTextAnimation}>
                                <Title>Hi, I am<br /> {Bio.name}</Title>
                                <TextLoop>
                                    I am a
                                    <Span>
                                        <StyledTypewriter>
                                            <Typewriter
                                                options={{
                                                    strings: Bio.roles,
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </StyledTypewriter>
                                    </Span>
                                </TextLoop>
                            </motion.div>
                            
                            <SubTitle>{Bio.description}</SubTitle>
                            <ResumeButton href="your-resume-link.pdf" target="_blank" rel="noopener noreferrer">
                                Check Resume
                            </ResumeButton>
                        </HeroLeftContainer>
                        
                        <HeroRightContainer>
                            <Tilt>
                                <Img src={images} alt="images" />
                            </Tilt>
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    );
};

export default Hero;
