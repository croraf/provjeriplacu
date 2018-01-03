import React from 'react';
import {Panel} from 'react-bootstrap';

import {MyPanelHeaderContainer} from './MyPanelHeaderContainer';

import './ScrollingPanel.css';

import {onScrollCallbacks} from './scrollingPanelUtils';

class ScrollingPanel extends React.Component {

    componentDidMount () {
        /* HACK FOR hiding tooltips on inputs container scroll, because of bug. */
        const scrollPanel = document.getElementsByClassName('panel-body')[0];

        scrollPanel.onscroll = () => {
            
            onScrollCallbacks.forEach(callback => {
                callback();
            });
        };
    }
    
    render () {

        const { children, headerText, bsStyle, headerButtonActionType } = this.props;
        
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
}

export {ScrollingPanel};