import {combineReducers, createStore} from 'redux';
import projectReducer from '../modules/admin/projects/Projects.reducer'

let rootReducer = combineReducers({
    projects: projectReducer,
})
let store = createStore(rootReducer);

export default store;