import React from 'react';
import {Panel} from 'react-bootstrap';

import {MyPanelHeaderContainer} from './MyPanelHeaderContainer';

import './ScrollingPanel.css';

function ScrollingPanel({ children, headerText, bsStyle, headerButtonActionType }) {
    return (
        <Panel 
            header={<MyPanelHeaderContainer text={headerText} actionType={headerButtonActionType} />}
            style={{padding: '0px', height: '100%'}}
            bsStyle={bsStyle}
        >
            <div style={{height: '100%', padding: '15px'}}>
                {children}
            </div>
        </Panel>
    );
}

export {ScrollingPanel};