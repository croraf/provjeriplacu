import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';


let MyPanelHeader = ({text, buttonClickHandler, hideOptional}) => (
  <Row style={{height: '22px'}}>
    <Col xs={6}>{text}</Col>
    <Col xs={6} style={{textAlign: 'right'}}>
      { 
        buttonClickHandler ? 
          (<Button type="button" onClick={buttonClickHandler} className='btn-xs' >
            {hideOptional ? 'Prikaži detalje' : 'Sakrij detalje'}
          </Button>) : null
      }
    </Col>
  </Row>
            
);

export {MyPanelHeader};