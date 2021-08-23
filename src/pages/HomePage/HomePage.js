import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import TopBanner from "../../components/TopBanner/TopBanner";
import Services from "../../components/Services/Services";
import AllCourses from "../../components/AllCourses/AllCourses";
import Analysis from "../../components/Analysis/Analysis";
import Summary from "../../components/Summary/Summary";
import Project from "../../components/Project/Project";
import Software from "../../components/Software/Software";
import Videos from "../../components/Videos/Videos";
import ClientReview from "../../components/ClientReview/ClientReview";
import Footer from "../../components/Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Infinity Flame Soft is one of the best software firms in Sylhet."/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <Project/>
                <Software/>
                <Videos/>
                <ClientReview/>
                <Footer/>


            </Fragment>
        );
    }
}

export default HomePage;