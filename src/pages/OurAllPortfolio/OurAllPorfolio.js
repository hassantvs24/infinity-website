import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/pageTop/PageTop";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";
import Software from "../../components/Software/Software";
import AllSoftware from "../../components/AllSoftware/AllSoftware";

class OurAllPorfolio extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <TopNavigation title="Portfolio - Our Valuable projects"/>
                <PageTop pageTilte="PORTFOLIO"/>
                <Project/>
                <AllSoftware/>

                <Footer/>

            </div>
        );
    }
}

export default OurAllPorfolio;