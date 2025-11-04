import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {Bio, skills} from "../data/constants"
 import Skills from "./sections/Skills";
// Styled components

import {MenuRounded} from"@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  padding: 0 20px;
`
const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  
`;

const NavLogo = styled(LinkR)`
  padding: 0 6px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")}; /* Hide NavItems when isOpen is true */
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1; /* This allows the items to take up the available space */
  @media screen and (max-width: 768px) {
    display: none; /* Hide on mobile screens */
  `;

const NavLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 50;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align to the rightmost corner */
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

 &:hover {
    background: ${({ theme }) => theme.primary}; /* Change background color on hover */
    color: white; /* Change text color on hover for better visibility */
  }

`;

const ThemedButton = styled.a`
  background: ${({ theme }) => theme.primary};  /* Apply background from theme */
  color: ${({ theme }) => theme.text_primary};  /* Apply text color from theme */
  border: 1px solid ${({ theme }) => theme.primary};
  justify-content: start;
  display: flex;
  padding: 10px 20px;
  align-items: start;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

 &:hover {
    background: white; /* Change background color on hover */
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu=styled.ul`
  width:100%;
  display: flex;
  flex-direction: column; 
  align-items: start;
  gap: 16px;
  padding: 0 6 px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme}) => theme.card_light+99};
  position:absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => 
    (isOpen ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px; /* Fixed the double colon (::) to a single colon */
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; /* Opacity should be set between 0 and 1 */
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")}; /* Adjusted z-index values for layering */
`;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Aditi's Portfolio</NavLogo>

        <MobileIcon onClick={toggleMenu}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems isOpen={isOpen}>
          <NavLink to="#About">About</NavLink>
          <NavLink href={Skills}>Skills</NavLink>
          <NavLink to="#Experience">Experience</NavLink>
          <NavLink to="#Projects">Projects</NavLink>
          <NavLink to="#Education">Education</NavLink>
        </NavItems>

        <MobileMenu isOpen={isOpen}>
          <NavLink to="#About" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink href={Skills} onClick={toggleMenu}>
            Skills
          </NavLink>
          <NavLink to="#Experience" onClick={toggleMenu}>
            Experience
          </NavLink>
          <NavLink to="#Projects" onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink to="#Education" onClick={toggleMenu}>
            Education
          </NavLink>
          <ThemedButton href={Bio.github} target="_blank">
            Github profile
          </ThemedButton>
        </MobileMenu>

        <ButtonContainer>
          <Button href={Bio.github} target="_blank">
            Github profile
          </Button>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );

}

export default Navbar;

