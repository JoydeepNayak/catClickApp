import {
    FETCH_CAT_DETAILS,
    RECEIVE_CAT_DETAILS,
    CAT_DETAILS_ERROR,
    ADD_CAT_AGE_BY_ID
} from '../actions/catDetails_action';

const INITIAL_STATE = {
    cats: [],
    fetchingCatDetails: false,
    fetchingError: false
};

const catDetails = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CAT_DETAILS: {
            return {
                ...state,
                fetchingCatDetails: true
            }
        }
        case RECEIVE_CAT_DETAILS: {
            return {
                ...state,
                cats: action.cats,
                fetchingCatDetails: false
            }
        }
        case CAT_DETAILS_ERROR: {
            return {
                ...state,
                fetchingError: true
            }
        }
        case ADD_CAT_AGE_BY_ID: {
            return {
                ...state,
                cats: action.catDetails,
                fetchingError: true
            }
        }
        default: return {
            state
        }
    }
}

export default catDetails;