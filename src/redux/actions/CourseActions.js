import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from './ActionTypes';
import * as courseApi from '../../api/courseApi'

export const CreateCourse = (course) => {
    return {
        type: CREATE_COURSE,
        course
    }
};

export const LoadCoursesSuccess = (courses) => {
    return {
        type: LOAD_COURSES_SUCCESS,
        courses
    }
};

export const updateCourseSuccess = () => {

}

export const createCourseSuccess = () => {

}

// The function below is a Thunk --- Make sure you understand what "thunks" are for.
export const loadCourses = () => {
    return dispatch => {
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
        return courseApi.saveCourse(course).then(savedCourse => {
          course.id
            ? dispatch(updateCourseSuccess(savedCourse))
            : dispatch(createCourseSuccess(savedCourse));
        }).catch(err => {
            throw err;
        })
    }
}
