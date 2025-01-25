import React from 'react';
import styled from 'styled-components';
import { BsFire } from 'react-icons/bs';
import { FaF } from 'react-icons/fa6';
import { GiBeachBall } from 'react-icons/gi';
import { IoSettingsSharp } from 'react-icons/io5';
import { NavLink } from "react-router-dom";

export const Footer = ({isScrolling}) => {
  return (
    <FooterContainer className={isScrolling ? 'minimized' : ''}>
      <StyledNavLink to="">
        <BsFire opacity={'0.5'} size={'30%'}/>
      </StyledNavLink>
      <StyledNavLink  to="/">
        <GiBeachBall className="default-active" size={'40%'}/>
      </StyledNavLink>
      <StyledNavLink to="">
        <IoSettingsSharp opacity={'0.5'} size={'30%'} />
      </StyledNavLink>
      <StyledNavLink to="">
        <FaF opacity={'0.5'} size={'30%'} />
      </StyledNavLink>
    </FooterContainer>
  )
}

// Styled Components

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #000;
  
  @media (max-width: 768px) {
    padding: 1%;
  }


`;

const StyledNavLink = styled(NavLink)`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 30px;
  color: white;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &.active,
  &.default-active {
    opacity: 1;
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }


`;

