import _ from 'lodash';
import * as a from '../../actions/projects/actionTypes';
const INITIAL_STATE = {
    isLoading:false,
    error:false,
    success:false,
    projects:[],
    project:{}
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case a.FETCH_PROJECTS_REQUEST:
            return {
                ...state,
                isLoading:true
            };
        case a.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                success:true,
                projects:action.payload
            }
        case a.FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:true
            }
        case a.FETCH_PROJECT_DETAILS_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case a.FETCH_PROJECT_DETAILS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                success:true,
                project:action.project
            }
        case a.FETCH_PROJECT_DETAILS_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:true
            }    
        default: return state;
    }
};