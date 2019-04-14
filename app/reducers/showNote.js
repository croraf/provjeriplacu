
function showNote(state = true, action) {
    switch (action.type) {
        case 'SHOW_NOTE':
            return !state;
        /* case 'GEOLOCATION':
            console.log('reducer geolocation: ', action.position);
            return state; */
        default:
            return state;
    }
}

export {showNote};