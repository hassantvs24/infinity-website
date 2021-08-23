import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.css'
import '../../asset/css/responsive.css'
import '../../asset/css/bootstrap.min.css'
import {Nav, Navbar} from "react-bootstrap";
import beLogo from '../../asset/images/IFS New.svg'
import afLogo from '../../asset/images/IFS New.svg'
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[beLogo],
            navVariant:"dark",
            navBarBack:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
        }
    }


    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({ navVariant:'light',navBarTitle:'navTitleScroll',navBarLogo:[afLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({ navVariant:'dark' ,navBarTitle:'navTitle',navBarLogo:[beLogo],navBarBack:'navBackground',navBarItem:'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>

                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" >
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"><img className="navLogo" src={this.state.navBarLogo}/> Infinity Flame Soft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                          <Nav>
                            <Nav.Link>  <NavLink className={this.state.navBarItem}   exact activeStyle={{color:'#00a8ee'}}  to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink className={this.state.navBarItem}  exact activeStyle={{color:'#00a8ee'}}  to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink className={this.state.navBarItem}  exact activeStyle={{color:'#00a8ee'}}  to="/team">TEAMS</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink className={this.state.navBarItem}  exact activeStyle={{color:'#00a8ee'}}  to="/courses">COURSES</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink className={this.state.navBarItem}  exact activeStyle={{color:'#00a8ee'}}  to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink className={this.state.navBarItem}  exact activeStyle={{color:'#00a8ee'}}  to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink className={this.state.navBarItem}  exact activeStyle={{color:'#00a8ee'}}  to="/about">ABOUT</NavLink></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>



            </Fragment>


        );
    }
}

export default TopNavigation;