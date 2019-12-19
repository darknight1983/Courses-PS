import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/CourseActions'
import { loadAuthors } from '../../redux/actions/AuthorActions'
import PropTypes from 'prop-types';
import { bindActionCreators} from "redux";
import CourseForm from "./CourseForm";
import { newCourse } from '../../../tools/mockData'


const ManageCoursePage = ({ courses, history, authors, loadCourses, loadAuthors, saveCourse, ...props}) => {
    // Using React Hooks to initialize state!
    const [course, setCourse ] = useState({...props.course});
    const [errors, setErrors ] = useState({});

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(err => {
                alert("This is the err: " + err);
            });
        } else {
            setCourse({...props.course});
        }
        if (authors.length === 0) {
            loadAuthors().catch(err => {
                alert("This is the err: " + err);
            })
        }
    }, [props.course]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prevState => ({
            ...prevState,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }))
    };

    const handleSave = (e) => {
        e.preventDefault();
        saveCourse(course).then(() => {
            history.push("/courses");
        });
    }
    return (
        <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave}/>
    )
}

export const getCourseBySlug = (courses, slug) => {
    return courses.find(course => course.slug === slug) || null;
}

const mapStateToProps = (state, ownProps) =>  {
    const slug = ownProps.match.params.slug;  // match prop added by 'react-router'
    const course = (slug && state.courses.length > 0) ? getCourseBySlug(state.courses, slug) : newCourse;
    return {
        course,
        courses: state.courses,
        authors: state.authors
    }
};

// Currently using the "object form" of mapDispatchToProps as recommended by 'React-Redux' team
const mapDispatchToProps = {
    loadCourses: loadCourses,
    loadAuthors: loadAuthors,
    saveCourse: saveCourse
};

// This is the "function form" of mapDispatchToProps. It provides more flexibility in customizing the functions your
// components receives, and how they dispatch actions.

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//         loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
//     }
// }

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    courses: PropTypes.array,
    authors: PropTypes.array,
    saveCourse: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
