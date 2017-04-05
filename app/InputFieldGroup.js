import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {FieldGroup} from './FieldGroup';

const InputFieldGroup = ({ ...props }) => (
    <Row>
        <Col xs={12}>
            <FieldGroup
                type='number'
                placeholder="Unesi" 
                {...props} />
        </Col>
    </Row>
);

export {InputFieldGroup};