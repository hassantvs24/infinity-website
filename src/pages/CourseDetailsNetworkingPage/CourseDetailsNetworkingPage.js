import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import CourseDetailsBanner from "../../components/CourseDetailsBanner/CourseDetailsBanner";
import Footer from "../../components/Footer/Footer";
import CourseDetailsNetworking from "../../components/CourseDetailsNetworking/CourseDetailsNetworking";

class CourseDetailsNetworkingPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <div>

                <TopNavigation title="details"/>
                <CourseDetailsBanner pageTilte="Professional Networking" pageSubTilte="Total class-40" />
                <CourseDetailsNetworking/>
                <Footer/>

            </div>
        );
    }
}

export default CourseDetailsNetworkingPage;