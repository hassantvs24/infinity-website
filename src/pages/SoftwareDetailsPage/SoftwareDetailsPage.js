import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/pageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import SoftwareDetails from "../../components/Software details/SoftwareDetails";

class SoftwareDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <TopNavigation title="Software details"/>
                <PageTop pageTilte="HRM System"/>
                <SoftwareDetails/>
                <Footer/>

            </div>
        );
    }
}

export default SoftwareDetailsPage;