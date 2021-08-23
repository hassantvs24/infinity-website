import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import CourseDetailsBanner from "../../components/CourseDetailsBanner/CourseDetailsBanner";
import Footer from "../../components/Footer/Footer";
import CourseDetailsWeb from "../../components/CourseDetailsWeb/CourseDetailsWeb";

class CourseDetails extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <div>

                <TopNavigation title="details"/>
                <CourseDetailsBanner pageTilte="Fundamental Web Development" pageSubTilte="Total class-50" pageSubTilteOne="Frontend class-25" pageSubTilteTwo="Backend class-25"/>
                <CourseDetailsWeb/>
                <Footer/>

            </div>
        );
    }
}

export default CourseDetails;