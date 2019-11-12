import { BASE_URL } from '../utilities/constants';
export const FETCH_CAT_DETAILS = "FETCH_CAT_DETAILS";
export const RECEIVE_CAT_DETAILS = "RECEIVE_CAT_DETAILS";
export const CAT_DETAILS_ERROR = "CAT_DETAILS_ERROR";
export const ADD_CAT_AGE_BY_ID = "ADD_CAT_AGE_BY_ID";



const fetchCatDetails = () => ({ type: FETCH_CAT_DETAILS });
const receiveCatDetails = (cats) => ({ type: RECEIVE_CAT_DETAILS, cats });
const catDetailsError = () => ({ type: CAT_DETAILS_ERROR });

export const getCats = () => {
    return async (dispatch) => {
        dispatch(fetchCatDetails());
        try {
            const response = await fetch(`${BASE_URL}/getCatDetails`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            dispatch(receiveCatDetails(json));
        }
        catch (error) {
            if (!error.response) {
                // network error
                alert('Please check your network connectivity.')
            } else {
                dispatch(catDetailsError(error));
            }
        }
    }
}

// Add cat age in store

const addCatAge = (catDetails) => ({ type: ADD_CAT_AGE_BY_ID, catDetails });

export const addAgeOfCatById = (catId, catDetails) => {
    var index = catDetails.findIndex((elem) => (elem.CatId === catId));
    var objToUpdate = catDetails.filter(cat => cat.CatId === catId)[0];
    objToUpdate.CatClicks = objToUpdate.CatClicks + 1;
    objToUpdate.CatAge = objToUpdate.CatAge + 1;
    catDetails.splice(index, 1, objToUpdate);
    return (dispatch) => {
        dispatch(addCatAge(catDetails));
    }
}
