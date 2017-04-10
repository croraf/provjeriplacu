
import {izracunPlaca} from '../izracunPlaca';

const calculateResultsAction = (formData) => {

    return (dispatch) => {

        dispatch({
            type: 'CALCULATIONS_STARTED'
        });

        setTimeout(
            () => {
                dispatch({
                    type: 'CALCULATIONS_FINISHED',
                    values: izracunPlaca(formData)
                });
            }, 
            1000
        );

        
    };
};

export {calculateResultsAction};