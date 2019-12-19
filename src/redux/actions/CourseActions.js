import {
    LOAD_COURSES_SUCCESS,
    CREATE_COURSE_SUCCESS,
    UPDATE_COURSE_SUCCESS
} from './ActionTypes';
import * as courseApi from '../../api/courseApi'
import { beginApiCall} from "./apiStatusActions";

export const LoadCoursesSuccess = (courses) => {
    return {
        type: LOAD_COURSES_SUCCESS,
        courses
    }
};

export const updateCourseSuccess = (course) => {
    return {
        type: UPDATE_COURSE_SUCCESS,
        course
    }
}

export const createCourseSuccess = (course) => {
    return {
        type: CREATE_COURSE_SUCCESS,
        course
    }
}

// The function below is a Thunk --- Make sure you understand what "thunks" are for.
export const loadCourses = () => {
    return dispatch => {
        dispatch(beginApiCall());
        return courseApi.getCourses().then(courses => {
            dispatch(LoadCoursesSuccess(courses));
        }).catch(error => {
            throw error;
        })
    }
}

// The function below is a Thunk --- Make sure you understand what "thunks" are for.
export const saveCourse = (course) => {
    return (dispatch, getState) => {
        dispatch(beginApiCall());
        return courseApi.saveCourse(course).then(savedCourse => {
          course.id
            ? dispatch(updateCourseSuccess(savedCourse))
            : dispatch(createCourseSuccess(savedCourse));
        }).catch(err => {
            throw err;
        })
    }
};
