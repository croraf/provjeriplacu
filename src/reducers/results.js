const initialState = {
  values: {},
  calculating: false
};

function results (state = initialState, action) {
  switch (action.type) {
    case 'CALCULATIONS_STARTED':
      return {
        values: {},
        calculating: true
      };
    case 'CALCULATIONS_FINISHED':
      return {
        values: {...action.values},
        calculating: false
      };
    default:
      return state;
  }
}

export {results};