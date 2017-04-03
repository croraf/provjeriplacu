import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {FieldGroup} from './FieldGroup';

const InputFieldGroup = ({ name, label, help, infoNote, ...props }) => (
    <Row>
        <Col xs={12}>
            <FieldGroup
                help={help}
                type='number'
                label={label}
                placeholder="Unesi"
                name={name}
                infoNote={infoNote} />
        </Col>
    </Row>
);

export {InputFieldGroup};