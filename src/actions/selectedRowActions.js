export const selectRow = (id) => {
    return {
        type: 'SELECTED',
        id: id
    };
};

// TODO add method for deselecting a row
// TODO check if multiselection is required