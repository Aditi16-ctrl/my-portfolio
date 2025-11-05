import React, { useState } from "react";
import styled from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

// ---------------- Styled Components ----------------

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  padding: 0 20px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
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
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ThemedButton = styled.a`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: white;
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

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 20px 40px;
  list-style: none;
  background: ${({ theme }) => theme.card_light + "99"};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

// ---------------- Component ----------------

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="#About">Aditi's Portfolio</NavLogo>

        <MobileIcon onClick={toggleMenu}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        {/* Desktop Nav */}
        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen}>
          <NavLink href="#About" onClick={toggleMenu}>About</NavLink>
          <NavLink href="#Skills" onClick={toggleMenu}>Skills</NavLink>
          <NavLink href="#Experience" onClick={toggleMenu}>Experience</NavLink>
          <NavLink href="#Projects" onClick={toggleMenu}>Projects</NavLink>
          <NavLink href="#Education" onClick={toggleMenu}>Education</NavLink>
          <ThemedButton href={Bio.github} target="_blank">
            GitHub Profile
          </ThemedButton>
        </MobileMenu>

        {/* Desktop Button */}
        <ButtonContainer>
          <Button href={Bio.github} target="_blank">
            GitHub Profile
          </Button>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
