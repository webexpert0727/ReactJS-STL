import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import {reducer as notifications} from 'react-notification-system-redux';
import contactReducer from './contactReducer/contactReducer';
import projectsReducer from './projectsReducer/projectsReducer';

const rootReducers = combineReducers({
    contact: contactReducer,
    projects: projectsReducer,
    form: formReducer,
    notifications
});

export default rootReducers;