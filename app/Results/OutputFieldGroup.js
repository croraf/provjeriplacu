import React from 'react';

import {FieldGroup} from '../FieldGroup';
import {Col} from 'react-bootstrap';

const OutputFieldGroup = ({ label, value, hidden }) => (
    
    hidden ? null : (
        <Col xs={6}>
            <FieldGroup
            type='text'
            label={label}
            placeholder="Result"
            readOnly
            value={value ? value.toFixed(2) : value}
            />
        </Col>
    )
);

export {OutputFieldGroup};