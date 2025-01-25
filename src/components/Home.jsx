import React, { useState, useEffect, useRef } from 'react'
import { matches } from '../utils/data';
import { Navbar } from './Navbar';
import { GameCard } from './GameCard';
import { Footer } from './Footer';
import { FaCircle } from 'react-icons/fa6';
import styled from 'styled-components';
export const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  // const [scrollTimeout, setScrollTimeout] = useState(null);
  const scrollTimeoutRef = useRef(null);

  const handleScroll = () => {
    setIsScrolling(true);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500);

    // if(scrollTimeout) clearTimeout(scrollTimeout);
    // const newTimeout = setTimeout(() => {
    //   setIsScrolling(false);
    // }, 500);

    // setScrollTimeout(newTimeout);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);


  return (
    <Container>
      {!isScrolling && <Navbar isScrolling={isScrolling} />}

      <MatchContainer>
        <ButtonContainer>
          <ButtonPrimary>Upcoming</ButtonPrimary>
          <ButtonSecondary> <FaCircle color='#99f32b' size={'15px'} /> Live</ButtonSecondary>
          <ButtonSecondary>Completed</ButtonSecondary>
        </ButtonContainer>

        <Matches>
          {Object.entries(
            matches.reduce((acc, match) => {
              const date = match.date;
              if (!acc[date]) acc[date] = [];
              acc[date].push(match);
              return acc;
            }, {})
          ).map(([date, games]) => (
            <DateContainer key={date}>
              <DateHeading>{date}</DateHeading>
              <GamesColumn>
                {games.map((match) => (
                  <GameCard key={match.id} match={match}  />
                ))}
              </GamesColumn>
            </DateContainer>
          ))}
        </Matches>
      </MatchContainer>

      {!isScrolling && <Footer  isScrolling={isScrolling} />}

      
    </Container>
    
  )
}

// Styled Components
const Container = styled.div`
  width: 100%;

`;

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 10px solid white;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    align-items: center;
    justify-content:center;
    gap: 10px;
    width: 90%;
  }
`;

const ButtonPrimary = styled.button`
  padding: 1rem 1rem;
  border: none;
  border-radius: 10px;
  background-color: #262525;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonSecondary = styled.button`
  padding: 1rem 1rem;
  border: 0.5px solid white;
  border-radius: 10px;
  background-color: black;
  color: whiteSmoke;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Matches = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

const DateContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const DateHeading = styled.div`
  position: relative;
  top: 25px;
  background-color: #000;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  border: 2px solid white;
`;

const GamesColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  padding: 40px;
  padding-top: 80px;
  width: 100%;
  border-top: 1px solid white;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 20px;
    padding-top: 80px;
  }
`;



