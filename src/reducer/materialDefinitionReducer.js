import materialDefinitionMock from "../materialDefinitionMock.json";

const initialState = materialDefinitionMock;

const MaterialDefinitionReducer = (state = initialState, action) => {
  let newState = { ...state };

  // missing implementation for check in/ check out/ edit material/ transfer material/ set stock

  switch (action.type) {
    case "NEW_MATERIAL":

    //TODO check input fields for null values --> show message --> save is not possible

      let maxId = 0;
      state.forEach(i => {
        if(i.id > maxId) {
          maxId = i.id;
        }
      });

      const checkedOutNumber = 0;
  
      let newItem = {
        "id" : maxId+1,
        "materialName" : action.name,
        "type" : action.materialType,
        "status": action.status,
        "stock": action.stock,
        "checkedIn": action.stock,
        "checkedOut": checkedOutNumber,
        "uom": action.uom,
        "price": action.price,
        "deliveryDate": action.deliveryDate,
        "barcode": action.barcode
      }

      state.push(newItem);
      newState = state;
      break;

    case "DELETE_MATERIAL":

    // TODO check user rights
    // TODO implement generic filter for material list to hide deleted materials

        state.forEach(i=> {
          if(i.id === action.id) {
            i.status = "deleted";
          }
        });
        newState = state;
        break;
    default:
      newState = state;
      break;
  }
  return newState
};
export default MaterialDefinitionReducer;
