import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import {reducer as notifications} from 'react-notification-system-redux';
import contactReducer from './contactReducer/contactReducer';
import myProjectsReducer from './myProjectsReducer/myProjectsReducer';
import projects from './projectsReducer/projectsReducer';

const rootReducers = combineReducers({
    contact: contactReducer,
    myProjects: myProjectsReducer,
    projects: projects,
    form: formReducer,
    notifications
});

export default rootReducers;