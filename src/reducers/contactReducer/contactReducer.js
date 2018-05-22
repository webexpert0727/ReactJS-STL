import * as a from '../../actions/contactUs/actionTypes';

const INITIAL_STATE = {
    isLoading:false,
    success:false,
    error:false
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case a.CONTACT_US_REQUEST:
            return {
                ...state,
                isLoading:true
            };
        case a.CONTACT_US_SUCCESS:
            return {
                ...state,
                isLoading:false,
                success:true
            }
        case a.CONTACT_US_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:true
            }
        default:
            return state;
    }
};