import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/pageTop/PageTop";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";

class AllTeam extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <TopNavigation title="Team - Our enthusiastic team"/>
                <PageTop pageTilte="All Team Members"/>
                <Team/>
                <Footer/>

            </div>
        );
    }
}

export default AllTeam;