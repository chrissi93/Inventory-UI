import { combineReducers } from 'redux'
import MaterialDefinitionReducer from './materialDefinitionReducer'
import SelectedRowReducer from './selectedRowReducer'

const CombinedReducer = combineReducers({
    materialDefinition: MaterialDefinitionReducer,
    selectedRow: SelectedRowReducer
});

export default CombinedReducer;