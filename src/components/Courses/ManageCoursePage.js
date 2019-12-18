import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/CourseActions'
import * as authorActions from '../../redux/actions/AuthorActions'
import PropTypes from 'prop-types';
import { bindActionCreators} from "redux";
import CourseForm from "./CourseForm";
import { newCourse } from '../../../tools/mockData'


const ManageCoursePage = ({ courses, authors, loadCourses, loadAuthors, ...props}) => {
    const [course, setCourse ] = useState({...props.course});
    const [errors, setErrors ] = useState({});
    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(err => {
                alert("This is the err: " + err);
            });
        }
        if (authors.length === 0) {
            loadAuthors().catch(err => {
                alert("This is the err: " + err);
            })
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(preState => ({
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }))
    }



    return (
        <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange}/>
    )

}

const mapStateToProps = (state) =>  {
    return {
        course: newCourse,
        courses: state.courses,
        authors: state.authors
    }
};

const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorActions.loadAuthors
};

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    loadAuthor: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    courses: PropTypes.array,
    authors: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
