import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import CourseDetailsBanner from "../../components/CourseDetailsBanner/CourseDetailsBanner";
import Footer from "../../components/Footer/Footer";
import CourseDetailsProgramming from "../../components/CourseDetailsProgramming/CourseDetailsProgramming";

class CourseDetailsProgrammingPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <div>

                <TopNavigation title="details"/>
                <CourseDetailsBanner pageTilte="Programming Course" pageSubTilte="Total class C -20" pageSubTilteTwo="Total class C++ -20"/>
                <CourseDetailsProgramming/>
                <Footer/>

            </div>
        );
    }
}

export default CourseDetailsProgrammingPage ;