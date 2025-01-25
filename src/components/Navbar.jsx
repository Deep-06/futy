import React, { useState } from 'react';
import { SlEarphonesAlt } from "react-icons/sl";
import { UserProfile } from './UserProfile';

export const Navbar = ({ isScrolling,profileAnimation }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1%', paddingRight: '5%', paddingLeft: '5%' }} className={`header ${isScrolling ? 'minimized' : ''}`}>

      <div style={styles.container}>
        <img onClick={handleProfileClick} className={`profile-pic  ${profileAnimation}`} style={styles.img}
          src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png' alt='Profile pic' />

        {showDropdown && <UserProfile/> }

        <div style={styles.center}>
          <div style={styles.coin}>
            <div style={styles.f}>F</div>
            <p style={{ fontSize: '35px', fontWeight: 'bold' }}>50</p>
          </div>
        </div>

      </div>

      <div style={styles.container}>
        <div style={{
          border: '2px solid white', width: '60px', height: '60px', display: 'flex', justifyContent: 'center',
          alignItems: 'center', borderRadius: '50%'
        }}><SlEarphonesAlt size='50%' /></div>
        <button style={styles.button}>How to play</button>
      </div>

    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '250px',
    position: 'relative', 
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
    borderRadius: '40px',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '20px',
    fontWeight: 'bold',
    border: '1px solid white',

  },
  center: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
 
}
