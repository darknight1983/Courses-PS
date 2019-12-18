import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/CourseActions'
import * as authorActions from '../../redux/actions/AuthorActions'
import PropTypes from 'prop-types';
import { bindActionCreators} from "redux";
import CourseList from './CourseList'

class CoursesPage extends Component {
    componentDidMount() {
        const { courses, authors, actions } = this.props;
        if (courses.length === 0) {
            actions.loadCourses().catch(err => {
                alert("This is the err: " + err);
            });
        }
        if (authors.length === 0) {
            actions.loadAuthors().catch(err => {
                alert("This is the err: " + err);
            })
        }
    }
    render() {
        return (
            <>
                <h2>Courses</h2>
                <CourseList courses={this.props.courses} authors={this.props.authors}/>
            </>
        )
    }
}

 const mapStateToProps = (state) =>  {
    return {
        courses: state.authors.length === 0 ? [] : state.courses.map(course => {
            return {
                ...course,
                authorName: state.authors.find(a => a.id === course.authorId).name
            }
        }),
        authors: state.authors
    }
 };

 const mapDispatchToProps = dispatch => ({
     actions: {
         loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
         loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
     }
 });

 CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array,
    authors: PropTypes.array,
 };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
