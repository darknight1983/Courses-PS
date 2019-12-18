import { combineReducers } from "redux";
import courseReducer from "./CourseReducer";
import authorsReducer from './AuthorReducer'

const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorsReducer
});

export default rootReducer;
