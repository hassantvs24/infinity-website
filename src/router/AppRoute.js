import React, {Component, Fragment} from 'react';

import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MainAllCourses from "../pages/MainAllCourses/MainAllCourses";
import AllTeam from "../pages/AllTeam/AllTeam";
import OurAllPortfolio from "../pages/OurAllPortfolio/OurAllPorfolio";
import AboutUs from "../pages/AboutUs/AllAboutUs"
import ContactPage from "../pages/ContactPage/ContactPage";
import AllMainServices from "../pages/AllMainServices/AllMainServices";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import SoftwareDetailsPage from "../pages/SoftwareDetailsPage/SoftwareDetailsPage";
import CourseDetailsSoftPage from "../pages/CourseDetailsSoftPage/CourseDetailsSoftPage";
import CourseDetailsNetworkingPage from "../pages/CourseDetailsNetworkingPage/CourseDetailsNetworkingPage";
import CourseDetailsAppPage from "../pages/CourseDetailsAppPage/CourseDetailsAppPage";
import CourseDetailsProgrammingPage from "../pages/CourseDetailsProgrammingPage/CourseDetailsProgrammingPage";





class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <Switch>

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={AllMainServices}/>
                    <Route exact path="/team" component={AllTeam}/>
                    <Route exact path="/courses" component={MainAllCourses}/>
                    <Route exact path="/portfolio" component={OurAllPortfolio}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/details" component={CourseDetails}/>
                     <Route exact path="/SoftCourseDetails" component={CourseDetailsSoftPage}/>
                     <Route exact path="/NetworkingCourseDetails" component={CourseDetailsNetworkingPage}/>
                    <Route exact path="/AppCourseDetails" component={CourseDetailsAppPage}/>
                    <Route exact path="/programming" component={CourseDetailsProgrammingPage}/>
                    <Route exact path="/software" component={SoftwareDetailsPage}/>


                </Switch>


            </Fragment>
        );
    }
}

export default AppRoute;