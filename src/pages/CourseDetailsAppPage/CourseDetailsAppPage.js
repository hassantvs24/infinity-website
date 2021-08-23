import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import CourseDetailsBanner from "../../components/CourseDetailsBanner/CourseDetailsBanner";
import Footer from "../../components/Footer/Footer";
import CourseDetailsApp from "../../components/CourseDetailsApp/CourseDetailsApp";

class CourseDetailsAppPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <div>

                <TopNavigation title="details"/>
                <CourseDetailsBanner pageTilte="Mobile App Development" pageSubTilte="Total class-40" />
                <CourseDetailsApp/>
                <Footer/>

            </div>
        );
    }
}

export default CourseDetailsAppPage;