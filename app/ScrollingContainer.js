import React from 'react';
import {Panel, Button} from 'react-bootstrap';

/*<Col xs={3} md={1} lg={1}> 
                        
                    </Col>*/

function MyPanelHeader ({text, callback}) {
    return(
        <div>
            {text}
            { 
                callback ? 
                (<Button type="button" onClick={callback} className='btn-xs' style={{float: 'right'}}>
                    Show/Hide full data
                </Button>) : null
            }
        </div>
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