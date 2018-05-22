import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import {reducer as notifications} from 'react-notification-system-redux';
import contactReducer from './contactReducer/contactReducer';

const rootReducers = combineReducers({
    contact:contactReducer,
    form: formReducer,
    notifications
});

export default rootReducers;