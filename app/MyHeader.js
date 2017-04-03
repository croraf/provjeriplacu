import React from 'react';
import {PageHeader, Grid, Row, Col, Button, Well} from 'react-bootstrap';

let MyHeader = ({showHideOptionalCallback}) => (
    <Well>
        <PageHeader style={{textAlign: 'center'}}>
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
        <div style={{textAlign: 'center'}}>
            Primjer: Ukoliko je smjena subota 19:00 do nedjelja 7:00, 
            unosimo 5 sati subote, 7 sati nedjelje te 8 sati noćnog rada. <br />
            Primjer: Ukoliko je smjena ponedjeljak blagdan 7:00-19:00, 
            unosimo 5 sati popodnevnog rada i 12 sati blaganskog rada.
        </div>
    </Well>
);

export {MyHeader};