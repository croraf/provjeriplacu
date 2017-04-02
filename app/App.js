import React from 'react';
import {PageHeader, Grid, Row, Col, Button} from 'react-bootstrap';

import {InputForm} from './InputForm';
import {PayResults} from './PayResults';

import {izracunPlaca} from './izracunPlaca';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hideOptional: true,
            izracunPlaca: {}
        };
    }

    formCallback = () => {
        
        let formData = new FormData(document.getElementById('mainForm'));
        
        let formDataObject = {};
        for (let entry of formData) {
            formDataObject[entry[0]] = parseFloat(entry[1]) || 0;
        }


        this.setState({
            izracunPlaca: izracunPlaca(formDataObject)
        });
    }

    showHideOptionalCallback = () => {
        this.setState((prevState) => ({
                hideOptional: !prevState.hideOptional
            })
        );
    }

    render () {

        return (
            <div>
                <PageHeader style={{textAlign: 'center'}}>Kalkulator plate</PageHeader>
                <Grid>
                    <Row>
                        <Col xs={4} md={3}>
                            <InputForm formCallback={this.formCallback}/>

                            <Row>
                                <Col xs={12}>
                                    <Button type="button" onClick={this.showHideOptionalCallback}>
                                        Show/Hide full data
                                    </Button>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={0} md={1} />

                        <Col xs={8} md={6}>
                            <PayResults {...this.state.izracunPlaca} hideOptional={this.state.hideOptional}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }


}

export {App};