import React from 'react';
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

const InputNumberField = ({ name, validate }) => (
    <Field 
        component={FormControlWrapper} 
        name={name} 
        onChange={onChangeValidation} 
        parse={parseStringToInteger} 
        validate={validate}
        type='number'/>
);


export {InputNumberField};