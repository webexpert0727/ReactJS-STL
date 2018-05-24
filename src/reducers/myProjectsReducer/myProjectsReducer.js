import * as a from '../../actions/myProjects/actionTypes';

const INITIAL_STATE = {
    isLoading:false,
    success:false,
    error:false,
    projects:[]
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case a.FETCH_MY_PROJECT_REQUEST:
            return {
                ...state,
                isLoading:true
            };
        case a.FETCH_MY_PROJECT_SUCCESS:
           return {
               ...state,
               isLoading:false,
               success:false,
               projects:action.payload
           }
        case a.FETCH_MY_PROJECT_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:true
            }
        case a.ADD_POST_PROJECT_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case a.ADD_POST_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading:false
            }
        case a.ADD_POST_PROJECT_FAILURE:
            return {
                ...state,
                isLoading:false
            }    
        default: 
            return state;
    }
};