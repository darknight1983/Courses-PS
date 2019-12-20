import { combineReducers } from "redux";
import courseReducer from "./CourseReducer";
import authorsReducer from './AuthorReducer'
import apiCallsInProgress from "./apiStatusReducer";


const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorsReducer,
    apiCallsInProgress
});

export default rootReducer;
