import { LOAD_AUTHORS_SUCCESS } from "./ActionTypes";
import * as authorsApi from '../../api/authorApi';
import { beginApiCall } from "./apiStatusActions";

const loadAuthorsSuccess = (authors) => {
    return {
        type: LOAD_AUTHORS_SUCCESS,
        authors
    }
}

export const loadAuthors = () => {
    return dispatch => {
        dispatch(beginApiCall());
        // Make the get request to get the authors from the api
        return authorsApi.getAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors))

        }).catch(err => {
            console.log("Error: " + err);
        })
    }
}
