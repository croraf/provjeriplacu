import {connect} from 'react-redux';

import {MyHeader} from './MyHeader';

let mapStateToProps = (state) => ({
    showNote: state.showNote
});
let mapDispatchToProps = (dispatch) => ({
    showHideNoteCallback: ()=>{dispatch({type: 'SHOW_NOTE'});}
}); 

let MyHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(MyHeader);

export {MyHeaderContainer};