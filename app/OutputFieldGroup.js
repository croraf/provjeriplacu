import React from 'react';

import {FieldGroup} from './FieldGroup';
import {Col} from 'react-bootstrap';

const OutputFieldGroup = ({ label, value }) => (
    <Col xs={6}>
        <FieldGroup
        type='text'
        label={label}
        placeholder="Result"
        readOnly
        value={value}
        />
    </Col>
);

export {OutputFieldGroup};