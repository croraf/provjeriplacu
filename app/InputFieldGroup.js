import React from 'react';

import {FieldGroup} from './FieldGroup';

const InputFieldGroup = ({ name, label, help, ...props }) => (
    <FieldGroup
      help={help}
      label={label}
      placeholder="Unesi"
      name={name}
    />
);

export {InputFieldGroup};