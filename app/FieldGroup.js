import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import {InfoGlyph} from './InfoGlyph';

function FieldGroup({ id, label, error, errorText='Unesi ispravnu vrijednost!', infoNote, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>
                {label}
                {infoNote ? <InfoGlyph infoNote={infoNote}/> : null}
            </ControlLabel>
            <FormControl {...props} />
            {error && <HelpBlock style={{margin: '0px 0px 0px 12px', color: 'red'}}>{errorText}</HelpBlock>}
        </FormGroup>
    );
}

export {FieldGroup};