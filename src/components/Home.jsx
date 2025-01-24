import React, { useState, useEffect } from 'react'
import { matches } from '../utils/data';
import { Navbar } from './Navbar';
import { GameCard } from './GameCard';
import { Footer } from './Footer';
export const Home = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const handleProfileClick = () => {
    console.log('Profile clicked!');
  };

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };



  return (
    <div>
    {!isScrolling && <Navbar
      searchActive={searchActive}
      handleSearchClick={handleSearchClick}
      handleProfileClick={handleProfileClick}
      scrolling={isScrolling}
    />}

      <div style={styles.matchContainer}>
        <div style={styles.buttonContainer}>
          <button style={styles.button1}>Upcoming</button>
          <button style={styles.button}>Live</button>
          <button style={styles.button}>Completed</button>
        </div>

        <div className="matches" style={styles.matches}>
          {Object.entries(
            matches.reduce((acc, match) => {
              const date = match.date;
              if (!acc[date]) acc[date] = [];
              acc[date].push(match);
              return acc;
            }, {})
          ).map(([date, games]) => (
            <div key={date} style={styles.dateContainer}>
              <div style={styles.dateHeading}>{date}</div>
              <div style={styles.gamesColumn}>
                {games.map((match) => (
                  <GameCard key={match.id} match={match} />
                ))}
              </div>
            </div>
          ))}
        </div>



      </div>


      {!isScrolling && 
      <footer className={`footer ${isScrolling ? 'minimized' : ''}`}>
      <Footer />
      </footer>
        
     }

    </div>
  )
}

const styles = {
  matches: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  // Center the entire match list
    paddingLeft: '30px',
    paddingRight: '30px'

  },
  matchContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '10px solid white',

  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '40%',
    padding: '20px',
    marginTop: '20px'
  },
  button1: {
    padding: '1rem 1rem',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#262525',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '20px',
  },
  button: {
    padding: '1rem 1rem',
    border: '0.5px solid white',
    borderRadius: '10px',
    backgroundColor: 'black',
    color: 'whiteSmoke',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '20px',
    fontWeight: '5px'
  },
  dateContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',

  },
  dateHeading: {
    position: 'relative',
    top: '25px',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '22px',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '50px',
    textAlign: 'center',
    border: '2px solid white'
  },
  gamesColumn: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '25px',
    borderTop: '1px solid white',
    // position: 'relative',  
    padding: '40px',
    paddingTop: '80px',
    width: '100%',

  }
}