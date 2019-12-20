import { LOAD_AUTHORS_SUCCESS } from "./ActionTypes";
import * as authorsApi from '../../api/authorApi';
import beginApiCall  from "./apiStatusActions";

const loadAuthorsSuccess = (authors) => {
    return {
        type: LOAD_AUTHORS_SUCCESS,
        authors
    }
};

export const loadAuthors = () => {
    return function(dispatch) {
        // Make the get request to get the authors from the api
        debugger
        dispatch(beginApiCall());
        return authorsApi.getAuthors().then(authors => {
            debugger
            dispatch(loadAuthorsSuccess(authors))
        }).catch(err => {
            console.log("Error: " + err);
        })
    }
}
