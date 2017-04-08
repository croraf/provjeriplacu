import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';


let MyPanelHeader = ({text, buttonClickHandler}) => (
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

export {MyPanelHeader};