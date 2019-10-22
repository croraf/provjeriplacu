
function hideOptional(state = true, action) {
  switch (action.type) {
    case 'HIDE_OPTIONAL':
      return !state;
    default:
      return state;
  }
}

export {hideOptional};