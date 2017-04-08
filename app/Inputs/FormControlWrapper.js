import React from 'react';
import {FormControl, HelpBlock} from 'react-bootstrap';


function FormControlWrapper({ input, meta }) {
    return (
        <div>
            <FormControl {...input} type='number' />
            {meta.error && <HelpBlock style={{margin: '0px 0px 0px 12px', color: 'red'}}>{meta.error}</HelpBlock>}
        </div>
    );
}

export {FormControlWrapper};