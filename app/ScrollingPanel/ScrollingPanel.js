import React from 'react';
import {Panel, Button, Grid, Row, Col} from 'react-bootstrap';

import {connect} from 'react-redux';



function MyPanelHeader ({text, buttonClickHandler}) {
    return(
            <Row>
                <Col xs={6}>{text}</Col>
                <Col xs={6} style={{textAlign: 'right'}}>
                    { 
                        buttonClickHandler ? 
                        (<Button type="button" onClick={buttonClickHandler} className='btn-xs' >
                            Show/Hide details
                        </Button>) : null
                    }
                </Col>
            </Row>
            
    );
}

let mapDispatchToProps = (dispatch, ownProps) => ({
    buttonClickHandler: ownProps.actionType ? () => dispatch({type: ownProps.actionType}) : undefined
});

let MyPanelHeaderContainer = connect(undefined, mapDispatchToProps)(MyPanelHeader);

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