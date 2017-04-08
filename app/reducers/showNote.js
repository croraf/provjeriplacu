
function showNote(state = true, action) {
    switch (action.type) {
        case 'SHOW_NOTE':
            return !state;
        default:
            return state;
    }
}

export {showNote};