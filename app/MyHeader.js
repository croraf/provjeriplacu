import React from 'react';
import {PageHeader, Grid, Row, Col, Button, Well} from 'react-bootstrap';

let MyHeader = ({showHideOptionalCallback}) => (
    <Well>
        <PageHeader style={{textAlign: 'center'}}>
            <Grid>
                <Row>
                    <Col xs={6} xsOffset={3}> Kalkulator plaće </Col>
                    <Col xs={3}> 
                        <Button type="button" onClick={showHideOptionalCallback}>
                            Show/Hide full data
                        </Button>
                    </Col>
                </Row>
                
            </Grid>
        </PageHeader>
        <div style={{textAlign: 'center'}}>
            BITNO: Unijeti <strong>odvojeno</strong> ukupan broj redovnih sati, broj prekovremenih sati, 
            broj popodnevnih sati, subota, nedjelja, noc,...! <br />
            Na primjer, ukoliko je smjena petak 22h do subota 06h, unosimo 8 redovnih sati,  
            <strong> ujedno i</strong> 6 sati subote, te 8 sati noćnog rada. <br />
        </div>
    </Well>
);

export {MyHeader};