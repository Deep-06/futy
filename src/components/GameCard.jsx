import React from 'react'
import { useNavigate } from 'react-router-dom'

export const GameCard = ({ match }) => {
    const navigate = useNavigate();
    return (
        <div style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={styles.container}>
                    <div style={styles.f}>F</div>
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
            <button onClick={() =>navigate(`/game/${match.id}`)} style={styles.button}>JOIN GAME</button>
        </div>
    )
}

const styles = {
    card: {
        backgroundColor: '#262525',
        borderRadius: '15px',
        borderTop: '15px solid white',
        position: 'relative',  
        paddingTop: '30px' 
    },
    container: {
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        gap: '5px',
        width: '35%', 
        backgroundColor: 'white', 
        borderRadius: '20px', 
        height: '45px', 
        color: 'black',
        position: 'absolute',   
        top: '-30px',           
        left: '50%',            
        transform: 'translateX(-50%)', 
    },
    f: {
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
    img: {
        width: "40%",
        borderRadius: '50%',
    },
    name: {
        fontSize: '20px',
        fontWeight: 'bold'
    }, time: {
        fontSize: '22px',
        fontWeight: 'bold',
    },
    button: {
        padding: '1rem 1rem',
        border: 'none',
        borderRadius: '15px',
        backgroundColor: '#0b8b4f',
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        fontSize: '20px',
        fontWeight: 'bold',
        width: '90%',
        marginTop: '15px',
        marginBottom: '15px'
    }
}