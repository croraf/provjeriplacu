import React from 'react';
import {Panel} from 'react-bootstrap';

function ScrollingContainer({ children, header, bsStyle }) {
    return (
        <Panel header={header} style={{padding: '0px'}} bsStyle={bsStyle}>
            <div style={{overflowY: 'auto', height:'500px', padding: '15px'}}>
                {children}
            </div>
        </Panel>
    );
}

export {ScrollingContainer};