import React from 'react';
import {Panel, Button} from 'react-bootstrap';

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
            <div id='creditsBar'>
                <span id='creditsBarText'> 
                    Credits: Vedran Rafaelic, Petar Beslic 
                </span>
            </div>
        );
    }
}


export {CreditsBar};