import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Mobile from "../../asset/images/mobileApp.jpg";

class CourseDetailsApp extends Component {
    render() {
        return (
            <Fragment>

                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={6} md={6}>
                            <h1 className="AboutName text-justify">What you learn</h1>
                            <hr/>
                            <ul>
                                <li>Java Programming
                                    <ul>
                                <li>Input & output</li>
                                <li>Basic operation</li>
                                <li>If-else/switch</li>
                                <li>Loop</li>
                                <li>Array</li>
                                <li>Array List </li>
                                <li>List 8. Hash Map </li>
                                <li>Date and time related class</li>
                                <li>Inheritance </li>
                                <li>Interface </li>
                                <li>Method overloading</li>
                                <li>Method overriding </li>
                                </ul>
                                </li>


                            </ul>

                            <ul>
                                <li>Android Development
                                    <ul>
                                       <li>Text view</li>
                                        <li>Edit text</li>
                                        <li>Button</li>
                                        <li>Linear Layout</li>
                                        <li>Relative Layout</li>
                                        <li>Coordinator Layout</li>
                                        <li>Constraint Layout</li>
                                        <li>Image View</li>
                                        <li>Web View</li>
                                        <li>Snack bar</li>
                                        <li>Progress Bar</li>
                                        <li>Pop up Dialog</li>
                                        <li>Radio Button</li>
                                        <li>Checkbox</li>
                                        <li>Toggle Button</li>
                                        <li>Intent</li>
                                        <li>Splash Screen</li>
                                        <li>Shared Preference</li>
                                        <li>SQLite</li>
                                        <li>Fragment</li>
                                        <li>Navigation Drawer</li>
                                        <li>List View</li>
                                        <li>Recycler View & Card View</li>
                                        <li>Audio & Video</li>
                                        <li>YouTube and Map Ape</li>
                                        <li>Firebase</li>
                                        <li>Much more!!</li>

                                    </ul>
                                </li>


                            </ul>
                        </Col>


                        <Col sm={12} lg={6} md={6}>

                            <img  className="CourseDetailsImg" src={Mobile}/>

                        </Col>



                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default CourseDetailsApp;