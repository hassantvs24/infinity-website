import React, {Component} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/pageTop/PageTop";

class MainPageTop extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <TopNavigation/>
                <PageTop/>
            </div>
        );
    }
}

export default MainPageTop;