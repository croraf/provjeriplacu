import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {InputForm} from './Inputs/InputForm';
import {ResultsContainer} from './Results/ResultsContainer';
import {MyHeaderContainer} from './MyHeader/MyHeaderContainer';
import {ScrollingPanel} from './ScrollingPanel/ScrollingPanel';
import {CreditsBar} from './CreditsBar';


import {calculateResultsAction} from './actions/calculateResultsAction';

class App extends React.Component {

    formCallback = (formData) => {

        this.props.store.dispatch( calculateResultsAction(formData) );

        /*this.props.store.dispatch({
            type: 'CALCULATIONS_FINISHED',
            values: izracunPlaca(formData)
        });*/

    }

    render () {

        return (
            <div>
                <MyHeaderContainer />
                
                <Grid>
                    <Row>

                        <Col xs={0} md={1} lg={2}/>

                        <Col xs={5} md={4} lg={3}>
                            <ScrollingPanel headerText='Parametri' bsStyle={'primary'}>
                                <InputForm onSubmit={this.formCallback}/>
                            </ScrollingPanel>
                        </Col>


                        <Col xs={0} md={0} />


                        <Col xs={7} md={6} lg={5}>
                            <ScrollingPanel headerText='Rezultati' headerButtonActionType='HIDE_OPTIONAL' >
                                <ResultsContainer />
                            </ScrollingPanel>
                        </Col>
                    </Row>
                </Grid>

                <CreditsBar />
            </div>
        );
    }


}

export {App};