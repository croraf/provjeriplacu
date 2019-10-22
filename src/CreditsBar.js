import React from 'react';

class CreditsBar extends React.Component {
  constructor (){
    super();
    this.state = {paddingLeft: 20};
  }

  render() {

    /*let style = {
            height: '20px', 
            backgroundColor: '#f5f5f5',
            paddingTop: '5px',
            marginTop: '10px',
            paddingLeft: this.state.paddingLeft + '%'
        };*/

    return(
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
  }
}


export {CreditsBar};