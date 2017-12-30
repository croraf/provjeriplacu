import {connect} from 'react-redux';

import {MyPanelHeader} from './MyPanelHeader';


let mapDispatchToProps = (dispatch, ownProps) => ({
    buttonClickHandler: ownProps.actionType ? () => dispatch({type: ownProps.actionType}) : undefined
});

const mapStateToProps = (state) => ({
    hideOptional: state.hideOptional
});

let MyPanelHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(MyPanelHeader);

export {MyPanelHeaderContainer};