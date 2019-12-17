import { combineReducers } from "redux";
import courseReducer from "./CourseReducer";

const rootReducer = combineReducers({
    courses: courseReducer
});

export default rootReducer;
