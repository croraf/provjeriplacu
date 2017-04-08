import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {InputForm} from './Inputs/InputForm';
import {ResultsContainer} from './Results/ResultsContainer';
import {MyHeaderContainer} from './MyHeader/MyHeaderContainer';
import {ScrollingPanel} from './ScrollingPanel/ScrollingPanel';
import {CreditsBar} from './CreditsBar';

import {izracunPlaca} from './izracunPlaca';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            resultsObject: {}
        }
    }

    formCallback = (formData) => {
        
        /*let formDataObject = {};
        for (let entry of formData) {
            console.log(entry);
            let parsedNumericInput = parseFloat(entry[1]);
            
            if (isNaN(parsedNumericInput)){
                formDataObject[entry[0]] = entry[1];
            } else {
                formDataObject[entry[0]] = parsedNumericInput;
            };
        }*/


        this.setState({
            resultsObject: izracunPlaca(formData)
        });
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
                                <ResultsContainer {...this.state.resultsObject} />
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