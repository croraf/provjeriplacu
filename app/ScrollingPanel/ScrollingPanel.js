import React from 'react';
import {Panel} from 'react-bootstrap';

import {MyPanelHeaderContainer} from './MyPanelHeaderContainer';

function ScrollingPanel({ children, headerText, bsStyle, headerButtonActionType }) {
    return (
        <Panel header={<MyPanelHeaderContainer text={headerText} actionType={headerButtonActionType} />} style={{padding: '0px'}} bsStyle={bsStyle}>
            <div style={{overflowY: 'scroll', height:'500px', padding: '15px'}}>
                {children}
            </div>
        </Panel>
    );
}

export {ScrollingPanel};