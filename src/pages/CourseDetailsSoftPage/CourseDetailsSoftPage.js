import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import CourseDetailsBanner from "../../components/CourseDetailsBanner/CourseDetailsBanner";
import Footer from "../../components/Footer/Footer";
import CourseDetailsSoft from "../../components/CourseDetailsSoft/CourseDetailsSoft";

class CourseDetailsSoftPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <div>

                <TopNavigation title="details"/>
                <CourseDetailsBanner pageTilte="Laravel(PHP Framework)" pageSubTilte="Total class-35" />
                <CourseDetailsSoft/>
                <Footer/>

            </div>
        );
    }
}

export default CourseDetailsSoftPage;