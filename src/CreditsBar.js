import React from 'react';

const CreditsBar = () => {

  return (
    <div style={{
      height: '30px',
      backgroundColor: '#e8e8e8',
      paddingTop: '5px',
      overflowX: 'hidden',
      marginTop: '5px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div className='creditsBarText'>
        Credits: Vedran Rafaelic (vrafaeli@msn.com), Petar Beslic
      </div>
    </div>
  );
};


export { CreditsBar };