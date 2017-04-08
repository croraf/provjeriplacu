import React from 'react';
import {Row, Col} from 'react-bootstrap';

import {FieldGroup} from './FieldGroup';

const InputFieldGroup = ({ label, name, infoNote, validate }) => (
    <Row>
        <Col xs={12}>
            <FieldGroup
                label={label}
                name={name}
                infoNote={infoNote}
                validate={validate}
                placeholder="Unesi" />
        </Col>
    </Row>
);

export {InputFieldGroup};