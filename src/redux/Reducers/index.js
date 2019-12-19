import { combineReducers } from "redux";
import courseReducer from "./CourseReducer";
import authorsReducer from './AuthorReducer'
import apiCallsStatusReducer from "./apiStatusReducer";


const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorsReducer,
    apiCallsInProgress: apiCallsStatusReducer
});

export default rootReducer;
