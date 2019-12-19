import {
    CREATE_COURSE_SUCCESS,
    LOAD_COURSES_SUCCESS,
    UPDATE_COURSE_SUCCESS
} from "../actions/ActionTypes";
import initialState from "./initialState";

const courseReducer = (state = initialState.courses, action) => {
        switch(action.type) {
            case CREATE_COURSE_SUCCESS:
                return [...state, {...action.course}];
            case LOAD_COURSES_SUCCESS:
                return action.courses;
            case UPDATE_COURSE_SUCCESS:
                debugger;
                return state.map(course => course.id === action.course.id ? action.course : course );
            default:
                return state;
        }
 }

 export default courseReducer;
