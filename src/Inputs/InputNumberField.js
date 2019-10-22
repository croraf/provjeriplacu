import React from 'react';
import {Field} from 'redux-form';

import {FormControlWrapper} from './FormControlWrapper';
import {validationUpToThousand} from './validationFunctions';

const parseStringToInteger = (stringValue) => {
  return stringValue === '' ? '' : parseInt(stringValue);
};


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