import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {FieldGroup} from './FieldGroup';

const InputFieldGroup = ({ name, label, help, ...props }) => (
    <Row>
        <Col xs={12}>
            <FieldGroup
            help={help}
            label={label}
            placeholder="Unesi"
            name={name}
            />
        </Col>
    </Row>
);

export {InputFieldGroup};