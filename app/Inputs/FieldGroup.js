import React from 'react';
import {FormGroup, ControlLabel} from 'react-bootstrap';
import {InfoGlyph} from '../InfoGlyph';

import {Field} from 'redux-form';

import {FormControlWrapper} from './FormControlWrapper';

const parseStringToInteger = (stringValue) => {
    return stringValue === '' ? 0 : parseInt(stringValue);
};

const onChangeValidation = (event, newValue, previousValue) => {
    
    if (newValue === ''){return;}
    else if (! (/^(([0-9]{1,3})?)$/.test(newValue)) ){
        event.preventDefault();
    }
};

const FieldGroup = ({ id, label, infoNote, name, validate }) => (
    <FormGroup controlId={id}>
        <ControlLabel>
            {label}
            {infoNote ? <InfoGlyph infoNote={infoNote}/> : null}
        </ControlLabel>
        <Field component={FormControlWrapper} name={name} onChange={onChangeValidation} parse={parseStringToInteger} validate={validate}/>
    </FormGroup>
);


export {FieldGroup};