import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/pageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";

class AllMainServices extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <TopNavigation title="Services - One door step for every solutions"/>
                <PageTop pageTilte="Our Services"/>
                <Services/>
                <Footer/>

            </div>
        );
    }
}

export default AllMainServices;