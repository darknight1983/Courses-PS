import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/CourseActions'
import * as authorActions from '../../redux/actions/AuthorActions'
import PropTypes from 'prop-types';
import { bindActionCreators} from "redux";
import CourseList from './CourseList'
import { Redirect } from 'react-router-dom';
import Spinner from "../common/Spinner";

class CoursesPage extends Component {
    state = {
        redirectToAddCoursePage: false,
    }

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
                {this.state.redirectToAddCoursePage && <Redirect to="/course"/>}
                <h2>Courses</h2>
                {this.props.loading ? (
                    <Spinner/>
                    ) : (
                        <><button
                            style={{marginBottom: 20}}
                            className="btn btn-primary add-course"
                            onClick={() => this.setState({redirectToAddCoursePage: true})}
                            >
                                Add Course
                            </button>
                            <CourseList courses={this.props.courses} authors={this.props.authors}/>
                        </>
                    )
                }
            </>
        )
    }
}

 const mapStateToProps = (state) =>  {
    console.log(state)
    return {
        courses: state.authors.length === 0 ? [] : state.courses.map(course => {
            return {
                ...course,
                authorName: state.authors.find(a => a.id === course.authorId).name
            }
        }),
        authors: state.authors,
        loading: state.apiCallsInProgress > 0,
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
    loading: PropTypes.bool.isRequired
 };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
