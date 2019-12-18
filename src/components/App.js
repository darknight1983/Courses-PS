import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./Courses/CoursesPage";
import ManageCoursePage from "./Courses/ManageCoursePage";

const App = () => (
    <div className={'container-fluid'}>
        <Header/>
        <Switch>
            <Route exact path={'/'} component={HomePage}></Route>
            <Route path={'/about'} component={AboutPage}></Route>
            <Route path={'/courses'} component={CoursesPage}></Route>
            <Route path={'/course/:slug'} component={ManageCoursePage}></Route>
            <Route path={'/course'} component={ManageCoursePage}></Route>
            <Route component={PageNotFound}></Route>
        </Switch>
    </div>
)

export default App
