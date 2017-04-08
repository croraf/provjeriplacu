import {connect} from 'react-redux';

import {Results} from './Results';

let mapStateToProps = (state) => ({
    hideOptional: state.hideOptional
});

let ResultsContainer = connect(mapStateToProps)(Results);

export {ResultsContainer};