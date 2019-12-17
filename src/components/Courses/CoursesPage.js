import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/CourseActions'
import PropTypes from 'prop-types';

class CoursesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        }
    }

    handleChange = (e) => {
        const course = { ...this.state.course, title: e.target.value };
        this.setState({
            course
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        debugger
        this.props.dispatch(courseActions.CreateCourse(this.state.course));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Courses</h2>
                    <h3>Add Course</h3>
                    <input
                        type={'text'}
                        onChange={this.handleChange}
                        value={this.state.course.title}
                        name={"title"}
                    />
                    <input
                        type="submit"
                        value={"Save"}
                    />
                </form>
                {this.props.courses.map((course, index) => (
                    <div key={index}>{course.title}</div>
                ))}
            </div>
        )
    }
}

 const mapStateToProps = (state, ownProps) =>  {
    debugger;
    return {
        courses: state.courses
    }
 };

 CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array,
 };

export default connect(mapStateToProps)(CoursesPage);
