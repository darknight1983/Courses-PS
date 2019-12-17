import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./Courses/CoursesPage";

const App = () => (
    <div className={'container-fluid'}>
        <Header/>
        <Switch>
            <Route exact path={'/'} component={HomePage}></Route>
            <Route path={'/about'} component={AboutPage}></Route>
            <Route path={'/courses'} component={CoursesPage}></Route>
            <Route component={PageNotFound}></Route>
        </Switch>
    </div>
)

export default App
