import React from 'react';
import {PageHeader, Grid, Row, Col, Button, Well, Glyphicon} from 'react-bootstrap';

let MyHeader = ({showHideOptionalCallback, showHideNoteCallback, showNote}) => (
    <Well style={{paddingBottom: '0px'}}>
        <PageHeader style={{textAlign: 'center', marginBottom: '0px'}}>
            <Grid>
                <Row>
                    <Col xs={6} xsOffset={3} lg={4} lgOffset={4}> Kalkulator plaće </Col>
                    <Col xs={3} lg={2}> 
                        <Button type="button" onClick={showHideOptionalCallback}>
                            Show/Hide full data
                        </Button>
                    </Col>
                </Row>
                
            </Grid>
        </PageHeader>
        
        {showNote ? (<div style={{textAlign: 'center'}}>
            Primjer: Ukoliko je smjena subota 19:00 do nedjelja 7:00, 
            unosimo 5 sati subote, 7 sati nedjelje te 8 sati noćnog rada. <br />
            Primjer: Ukoliko je smjena ponedjeljak blagdan 7:00-19:00, 
            unosimo 5 sati popodnevnog rada i 12 sati blaganskog rada. Ja sam rafo
        </div>) : null}
        <div style={{textAlign: 'center'}}>
            <Glyphicon 
                glyph={showNote ? 'glyphicon glyphicon-arrow-up' : 'glyphicon glyphicon-arrow-down'} 
                onClick={showHideNoteCallback} 
                style={{marginTop: '2px'}}/>
        </div>
    </Well>
);

export {MyHeader};