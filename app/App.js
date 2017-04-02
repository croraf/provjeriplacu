import React from 'react';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

import {InputForm} from './InputForm';
import {PayResults} from './PayResults';

import {izracunPlaca} from './izracunPlaca';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            osnovica: ""
        };
    }

    formCallback = () => {
        
        let formData = new FormData(document.getElementById('mainForm'));
        
        let formDataObject = {};
        for (let entry of formData) {
            formDataObject[entry[0]] = parseFloat(entry[1]) || 0;
        }


        this.setState(izracunPlaca(formDataObject));
    }

    render () {

        return (
            <div>
                <PageHeader style={{textAlign: 'center'}}>Kalkulator plate</PageHeader>
                <Grid>
                    <Row>
                        <Col xs={4} md={3}>
                            <InputForm formCallback={this.formCallback}/>
                        </Col>

                        <Col xs={0} md={1} />

                        <Col xs={8} md={6}>
                            <PayResults {...this.state}/>
                        </Col>
                    </Row>
                    <Row>
                        {/*<Col xs={3} md={3}>
                            <PayResult payValue={this.state.payValue}/>
                        </Col>*/}
                    </Row>
                </Grid>
            </div>
        );
    }


}

export {App};