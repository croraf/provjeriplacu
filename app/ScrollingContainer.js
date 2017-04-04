import React from 'react';
import {Panel, Button, Grid, Row, Col} from 'react-bootstrap';

/*<Col xs={3} md={1} lg={1}> 
                        
                    </Col>*/

function MyPanelHeader ({text, callback}) {
    return(
            <Row>
                <Col xs={6}>{text}</Col>
                <Col xs={6} style={{textAlign: 'right'}}>
                    { 
                        callback ? 
                        (<Button type="button" onClick={callback} className='btn-xs' >
                            Show/Hide details
                        </Button>) : null
                    }
                </Col>
            </Row>
            
    );
}

function ScrollingContainer({ children, headerText, bsStyle, showHideOptionalCallback }) {
    return (
        <Panel header={<MyPanelHeader text={headerText} callback={showHideOptionalCallback} />} style={{padding: '0px'}} bsStyle={bsStyle}>
            <div style={{overflowY: 'scroll', height:'500px', padding: '15px'}}>
                {children}
            </div>
        </Panel>
    );
}

export {ScrollingContainer};