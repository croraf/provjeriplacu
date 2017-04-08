let initialState =  {
    godineStaza: 0,
    brojSatiMjesecno: 100,
    brojNocnih: 0, 
    brojPopodne: 0,
    brojSubota: 0,
    brojNedjelja: 0,
    brojPrekovremeni: 0,
    brojBlagdan: 0,
    stopaPrireza: 0.18,
    brojDjece: 0,
    brojUzdrzavanih: 0,
    invalidnost: 'nema',
    profesija: 'lijecnikHMP'
};

let form = (state = initialState, action) => {
    switch (action.type) {
        case 'FORM':
            return Object.assign({}, ...state, action.value);
        default:
            return state;
    }
};

export {form};