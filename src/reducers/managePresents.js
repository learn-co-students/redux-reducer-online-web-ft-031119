export function managePresents(state, action){
    // Actions passed into this reducer only have a type attribute, so they would look something like this
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
            return state;
    }
}