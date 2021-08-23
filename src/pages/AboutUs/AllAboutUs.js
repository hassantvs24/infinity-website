import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/pageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";

class AllAboutUs extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>

                <TopNavigation title="About - Somthing to know"/>
                <PageTop pageTilte="About Us"/>
                <AboutUs />
                <Footer/>
            </div>
        );
    }
}

export default AllAboutUs;