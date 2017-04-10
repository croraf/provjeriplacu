import {connect} from 'react-redux';

import {Results} from './Results';

let mapStateToProps = (state) => ({
    hideOptional: state.hideOptional,
    ...state.results.values,
    calculating: state.results.calculating
});

let ResultsContainer = connect(mapStateToProps)(Results);

export {ResultsContainer};