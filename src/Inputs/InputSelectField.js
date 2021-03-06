import React from 'react';
import {Field} from 'redux-form';

import {FormControlWrapper} from './FormControlWrapper';

const InputSelectField = ({ name, children }) => (
  <Field component={FormControlWrapper} componentClass='select' name={name}>
    {children}
  </Field>
);

export {InputSelectField};
