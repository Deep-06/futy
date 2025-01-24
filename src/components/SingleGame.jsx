import React, {  useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useParams } from 'react-router-dom';
import { matches } from '../utils/data';


export const SingleGame = ({ scrolling, handleProfileClick, profileAnimation }) => {
  const [searchActive, setSearchActive] = useState(false);
  const { id } = useParams();
  const match = matches.find((m) => m.id === parseInt(id));

    const handleSearchClick = () => {
      setSearchActive((prev) => !prev);
    };

  return (
    <div style={{height:'100vh'}}>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1%', paddingRight: '5%', paddingLeft: '5%' }} className={`header ${scrolling ? 'minimized' : ''}`}>

        <div style={styles.container}>
          <img onClick={handleProfileClick} className={`profile-pic  ${profileAnimation}`} style={styles.img}
            src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png' alt='Profile pic' />

          <div style={styles.center}>
            <div style={styles.coin}>
              <div style={styles.f}>F</div>
              <p style={{ fontSize: '35px', fontWeight: 'bold' }}>50</p>
            </div>
          </div>

        </div>

        <div style={styles.container}>
          <div className="search-container">
            {searchActive ? (
              <input
                type="text"
                placeholder="Search"
                style={{padding:'5px'}}
              />
            ) : (
              <div className="search-icon" onClick={handleSearchClick}>
                <FaSearch size={'50%'} />
              </div>
            )}
          </div>
          <button style={styles.button}><GiHamburgerMenu size='50%' /></button>
        </div>

      </div>
      {/* Single game */}
      <div style={styles.center}>
        <div style={styles.card}>
          <div style={styles.center}>
            <div style={styles.game}>
              <div style={styles.fcard}>F</div>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>2100 ></p>
            </div>
          </div>

          <div style={styles.content}>
            <div>
              <img style={styles.img} src={match.team1.logo} alt='team1' />
              <p style={styles.name}>{match.team1.name}</p>
            </div>
            <div style={{ width: '90%', }}>
              <p>{match.date}</p>
              <p style={styles.time}>{match.time}</p>
            </div>
            <div>
              <img style={styles.img} src={match.team2.logo} alt='team2' />
              <p style={styles.name}>{match.team2.name}</p>
            </div>
          </div>
          <div style={styles.desc}>Game Description <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos mollitia ratione, minus distinctio numquam cumque incidunt ducimus, reiciendis
            aliquid quas animi doloremque nostrum libero, cupiditate nisi ex reprehenderit commodi consectetur?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor facilis at, placeat magnam ullam perspiciatis reprehenderit. Voluptatum laborum iste
            aliquam natus, reprehenderit, fugit eius totam officiis dolorem modi ex nesciunt!</div>

        </div>
      </div>

    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '300px',
  },
  img: {
    width: "30%",
    borderRadius: '50%',
    cursor: 'pointer',
  },
  coin: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'black',
    borderRadius: '40px',
    height: '45px',
    color: '#EC4C0E',
    border: '1px solid #EC4C0E',
    padding: '10px'
  },
  f: {
    fontSize: '20px',
    fontWeight: 'bolder',
    border: '5px solid #EC4C0E',
    color: '#EC4C0E',
    padding: '10px',
    borderRadius: '50%',
    height: '10px',
    width: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: '1rem 1rem',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',

  },
  card: {
    backgroundColor: '#262525',
    borderRadius: '15px',
    borderTop: '15px solid white',
    position: 'relative',
    paddingTop: '50px',
    width:'70%'
  },
  game: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '5px',
    width: '20%',
    backgroundColor: 'white',
    borderRadius: '20px',
    height: '65px',
    color: 'black',
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  fcard: {
    fontSize: '20px',
    fontWeight: 'bolder',
    border: '5px solid black',
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    borderRadius: '50%',
    height: '10px',
    width: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '4px solid white',
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold'
  }, time: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: '25px',
    padding:'5%'
  },
  center:{
display: 'flex', justifyContent: 'center', alignItems: 'center'
  }
}