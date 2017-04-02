import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {InputForm} from './InputForm';
import {PayResults} from './PayResults';
import {MyHeader} from './MyHeader';

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
                <MyHeader showHideOptionalCallback={this.showHideOptionalCallback}/>
                
                <Grid>
                    <Row>

                        <Col xs={0} md={1} />

                        <Col xs={4} md={3}>
                            <InputForm formCallback={this.formCallback}/>
                        </Col>

                        <Col xs={0} md={2} />


                        <Col xs={8} md={5}>
                            <PayResults {...this.state.izracunPlaca} hideOptional={this.state.hideOptional}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }


}

export {App};