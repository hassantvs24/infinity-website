import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/pageTop/PageTop";
import Project from "../../components/Project/Project";
import Software from "../../components/Software/Software";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <TopNavigation title="Contact - Just knock us, We provide our best" />
                <PageTop pageTilte="Contact Us"/>
                <Contact/>

                <Footer/>

            </div>
        );
    }
}

export default ContactPage;