import React from 'react'

export const UserProfile = () => {
    return (
        <div style={styles.dropdown}>
            <div style={styles.dropdownItem}><strong>Name:</strong> Deepshikha</div>
            <div style={styles.dropdownItem}><strong>Email:</strong> deep@example.com</div>
            <div style={styles.dropdownItem}><strong>Description:</strong> Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. Tenetur perspiciatis quasi neque sunt ex laboriosam 
            nisi voluptatibus reprehenderit. Cumque illum repellendus recusandae repudiandae optio velit. 
            Quae dicta architecto reiciendis tenetur.</div>
        </div>
    )
}

const styles={
    dropdown: {
        position: 'absolute',
        top: '60px',
        right: '0',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
        padding: '10px',
        borderRadius: '8px',
        minWidth: '200px',
        zIndex: 10,
      },
      dropdownItem: { 
        marginBottom: '8px', 
        fontSize: '14px', 
        color: '#333' ,
        textAlign:'left',
        
    },
}