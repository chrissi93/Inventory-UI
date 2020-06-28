const SelectedRowReducer = (state = false, action) => {

    const newState = { ...state };

    switch (action.type) {
        case "SELECTED":
            newState.bool = true;
            newState.id = action.id;
            break;
        default:
            newState.bool = false;
            break;
    }
    return newState;
};

export default SelectedRowReducer;