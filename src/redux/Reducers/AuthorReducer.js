import { LOAD_AUTHORS_SUCCESS} from "../actions/ActionTypes";
import initialState from "./initialState";

const AuthorReducer = (state = initialState.authors, action) => {
    switch(action.type) {
        case LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
};

export default AuthorReducer;
