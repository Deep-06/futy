import React, { useState } from 'react';
import styled from 'styled-components';
import { SlEarphonesAlt } from "react-icons/sl";
import { UserProfile } from './UserProfile';

export const Navbar = ({ isScrolling}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Header className={isScrolling ? 'minimized' : ''}>
      <NavSection>
        <ProfilePic
          onClick={handleProfileClick}
          src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'
          alt='Profile pic'
        />
        {showDropdown && <UserProfile />}

        <CoinContainer>
          <CoinText>F</CoinText>
          <CoinAmount>50</CoinAmount>
        </CoinContainer>
      </NavSection>

      <NavSection>
        <IconWrapper>
          <SlEarphonesAlt size='50%' />
        </IconWrapper>
        <PlayButton>How to play</PlayButton>
      </NavSection>
    </Header>
  )
}

// Styled Components

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1%;
  padding-right: 5%;
  padding-left: 5%;
  background-color: #000;

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  position: relative;

  @media (max-width: 768px) {
    width: 200px;
    justify-content: center;
  }
`;

const ProfilePic = styled.img`
  width: 30%;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CoinContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  background-color: black;
  border-radius: 40px;
  height: 45px;
  color: #EC4C0E;
  border: 1px solid #EC4C0E;
  padding: 10px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 40px;
    padding: 5px;
    gap: 5px;
  }
`;

const CoinText = styled.div`
  font-size: 20px;
  font-weight: bolder;
  border: 5px solid #EC4C0E;
  color: #EC4C0E;
  padding: 10px;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinAmount = styled.p`
  font-size: 35px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const IconWrapper = styled.div`
  border: 2px solid white;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const PlayButton = styled.button`
  padding: 1rem 1rem;
  border-radius: 40px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid white;

  &:hover {
    background-color: #333;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0.8rem 1rem;
  }
`;

