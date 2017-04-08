import React from 'react';

import {Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

const OutputFieldGroup = ({ id, label, value, hidden }) => (
    
    hidden ? null : (
        <Col xs={6}>
            <FormGroup controlId={id}>
                <ControlLabel>
                    {label}
                </ControlLabel>
                <FormControl type='text' placeholder='Result' readOnly value={value ? value.toFixed(2) : value} />
            </FormGroup>
        </Col>
    )
);

export {OutputFieldGroup};