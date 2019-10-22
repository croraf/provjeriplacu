import React from 'react';
import {FormControl, HelpBlock} from 'react-bootstrap';


function FormControlWrapper({ input, meta, type, componentClass, children }) {
  return (
    <div>
      <FormControl {...input} type={type} componentClass={componentClass}>
        {children}
      </FormControl>
      {meta.error && <HelpBlock style={{margin: '0px 0px 0px 12px', color: 'red'}}>{meta.error}</HelpBlock>}
    </div>
  );
}

export {FormControlWrapper};