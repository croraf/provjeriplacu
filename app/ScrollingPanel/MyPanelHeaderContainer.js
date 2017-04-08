import {connect} from 'react-redux';

import {MyPanelHeader} from './MyPanelHeader';


let mapDispatchToProps = (dispatch, ownProps) => ({
    buttonClickHandler: ownProps.actionType ? () => dispatch({type: ownProps.actionType}) : undefined
});

let MyPanelHeaderContainer = connect(undefined, mapDispatchToProps)(MyPanelHeader);

export {MyPanelHeaderContainer};