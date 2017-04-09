import React from 'react';
import {Field} from 'redux-form';

import {FormControlWrapper} from './FormControlWrapper';

const parseStringToInteger = (stringValue) => {
    return stringValue === '' ? 0 : parseInt(stringValue);
};

function validationUpToThousand (event, newValue, previousValue) {
    
    if (newValue === ''){return;}
    else if (! (/^(([0-9]{1,3})?)$/.test(newValue)) ){
        event.preventDefault();
    }
}

const InputNumberField = ({ name, validate, onChangeValidation }) => (
    <Field 
        component={FormControlWrapper} 
        name={name} 
        onChange={onChangeValidation} 
        parse={parseStringToInteger} 
        validate={validate}
        type='number'/>
);

InputNumberField.defaultProps = {
    onChangeValidation: validationUpToThousand
};


export {InputNumberField};