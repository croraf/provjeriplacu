import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import {InputForm} from './Inputs/InputForm';
import {ResultsContainer} from './Results/ResultsContainer';
import {MyHeaderContainer} from './MyHeader/MyHeaderContainer';
import {ScrollingPanel} from './ScrollingPanel/ScrollingPanel';
import {CreditsBar} from './CreditsBar';


import {calculateResultsAction} from './actions/calculateResultsAction';

class App extends React.Component {

    formCallback = (formData) => {

        this.props.store.dispatch( calculateResultsAction(formData) );
    }

    /* getGeoLocation = () => {
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.props.store.dispatch({type: 'GEOLOCATION', position: position});
            }
        );
    } */

    render () {

        return (
            <div style={{
                position: 'absolute',
                top: '0px', bottom: '0px', left: '0px', right: '0px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'}}
            >

                <div style={{flexShrink: '0'}}>
                    <MyHeaderContainer/>
                </div>
                
                <Grid style={{
                    flexGrow: '1',
                    flexShrink: '1',
                    margin: '0px auto 10px auto',
                    overflowY: 'hidden',
                    height: '100%',
                    width: '100%',
                    maxWidth: '1300px',
                    minHeight: '400px'
                    }}>
                    <Row style={{height: '100%'}}>
                        {/* <Button onClick={this.getGeoLocation}>Rafa</Button> */}

                        <Col xs={0} md={1} lg={2}/>

                        <Col xs={5} md={4} lg={3} style={{height: '100%', paddingBottom: '5px'}}>
                            <ScrollingPanel headerText='Parametri' bsStyle={'primary'}>
                                <InputForm onSubmit={this.formCallback}/>
                            </ScrollingPanel>
                        </Col>


                        <Col xs={0} md={0} />


                        <Col xs={7} md={6} lg={5} style={{height: '100%', paddingBottom: '5px'}}>
                            <ScrollingPanel headerText='Rezultati' headerButtonActionType='HIDE_OPTIONAL' >
                                <ResultsContainer />
                            </ScrollingPanel>
                        </Col>
                    </Row>
                </Grid>

                <div style={{flexShrink: '0'}}>
                    <CreditsBar />
                </div> 
            </div>
        );
    }


}

export {App};