import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import {InfoGlyph} from './InfoGlyph';

function FieldGroup({ id, label, help, infoNote, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>
                {label}
                {infoNote ? <InfoGlyph infoNote={infoNote}/> : null}
            </ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export {FieldGroup};