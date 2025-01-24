import React from 'react';
import { BsFire } from 'react-icons/bs';
import { FaF } from 'react-icons/fa6';
import { GiBeachBall } from 'react-icons/gi';
import { IoSettingsSharp } from 'react-icons/io5';
import { NavLink  } from "react-router-dom";


export const Footer = () => {
  return (
    <div style={styles.footer} >
            <NavLink
                to=""
                style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
            >
                <BsFire size={'30%'} style={styles.icon} />
            </NavLink>
            <NavLink
                to="/"
                exact
                style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
            >
                <GiBeachBall size={'50%'} style={styles.icon} />
            </NavLink>
            <NavLink
                to=""
                style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
            >
                <IoSettingsSharp size={'30%'} style={styles.icon} />
            </NavLink>
            <NavLink
                to=""
                style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
            >
                <FaF size={'30%'} style={styles.icon} />
            </NavLink>
        </div>
  )
}

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    link: {
        opacity: 0.5, 
        transition: 'opacity 0.3s ease-in-out',
    },
    activeLink: {
        opacity: 1, 
    },
    icon: {
        color: 'white',
    }
}