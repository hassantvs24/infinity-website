import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/pageTop/PageTop";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";
import AllCourses from "../../components/AllCourses/AllCourses";

class MainAllCourses extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <TopNavigation title="Courses - Web Desing &amp; Development, Mobile App"/>
                <PageTop pageTilte="Our Courses"/>
                <AllCourses/>
                <Footer/>

            </div>
        );
    }
}

export default MainAllCourses;