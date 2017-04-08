
import {connect} from 'react-redux';

import {InputFieldGroup} from './InputFieldGroup';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (fieldValue) => dispatch({
        type: 'FORM', value: {[ownProps.name]: fieldValue}
    })
});

const InputFieldGroupContainer = connect(undefined, mapDispatchToProps)(InputFieldGroup);

export {InputFieldGroupContainer};