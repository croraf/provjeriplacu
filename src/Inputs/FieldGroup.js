import React from 'react';
import {FormGroup, ControlLabel, Row, Col} from 'react-bootstrap';
import {InfoGlyph} from '../InfoGlyph';


const FieldGroup = ({ id, label, infoNote, children }) => (
    <Row>
        <Col xs={12}>
            <FormGroup controlId={id}>

                <ControlLabel>
                    {label}
                    {infoNote ? <InfoGlyph infoNote={infoNote}/> : null}
                </ControlLabel>
                
                {children}

            </FormGroup>
        </Col>
    </Row>
);


export {FieldGroup};