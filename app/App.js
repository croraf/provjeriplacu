import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {InputForm} from './InputForm';
import {PayResults} from './PayResults';
import {MyHeader} from './MyHeader';
import {ScrollingContainer} from './ScrollingContainer';

import {izracunPlaca} from './izracunPlaca';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hideOptional: true,
            showNote: true,
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

    showHideNoteCallback = () => {
        this.setState((prevState) => ({
                showNote: !prevState.showNote
            })
        );
    }

    render () {

        return (
            <div>
                <MyHeader 
                    showHideOptionalCallback={this.showHideOptionalCallback} 
                    showHideNoteCallback={this.showHideNoteCallback} 
                    showNote={this.state.showNote}/>
                
                <Grid>
                    <Row>

                        <Col xs={0} md={1} lg={2}/>

                        <Col xs={5} md={4} lg={3}>
                            <ScrollingContainer header='Parametri' bsStyle={'primary'}>
                                <InputForm formCallback={this.formCallback}/>
                            </ScrollingContainer>
                        </Col>


                        <Col xs={0} md={0} />


                        <Col xs={7} md={6} lg={5}>
                            <ScrollingContainer header='Rezultati'>
                                <PayResults {...this.state.izracunPlaca} hideOptional={this.state.hideOptional}/>
                            </ScrollingContainer>
                        </Col>
                    </Row>
                </Grid>

                <div 
                    style={{
                        height: "20px", 
                        backgroundColor: '#f5f5f5',
                        paddingTop: '5px',
                        marginTop: '10px',
                        textAlign: 'center'
                    }}> 
                    Credits: Vedran Rafaelic, Petar Beslic 
                </div>
            </div>
        );
    }


}

export {App};